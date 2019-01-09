import React from 'react';
import _ from 'lodash';
import { PermissionsAndroid, Alert } from 'react-native';
import base64 from 'base-64';
import { BleManager } from 'react-native-ble-plx';
import buscarCaracteristica from '../Caracteristicas';
import buscarServicio, { shortUUID } from '../Servicios';

const servicioParaDeviceByUUID = (device, serviceUUID) => {
  const list = device.servicios.filter(s => s.uuid === serviceUUID);
  return list.length > 0 ? list.pop() : null;
};

const compareUUID = (uuid, uuidCorto) => shortUUID(uuid) === uuidCorto;

const conBluetooth = (serv, carac, WrappedComponent) => {
  class HOC extends React.Component {
    state = {};

    constructor(props) {
      super(props);
      this.manager = new BleManager();
      this.state = {
        permisoConcedido: null,
        carac: null,
        valor: null,
        devices: [],
        device: null,
        filtro: null
        // filtro: ['0x180D']
      };
    }

    componentDidMount() {
      this.requestCameraPermission();
      this.manager.onStateChange(newState => {
        // console.log("newState", newState);
        if (newState !== 'PoweredOn') return;
        this.log('Started scanning...');
        this.manager.startDeviceScan(
          null,
          {
            allowDuplicates: false
          },
          (error, device) => {
            console.log('Error device', device);
            if (error) {
              Alert.alert(`Error: ${error.message}`);
              return;
            }
            this.log(`Device: ${device.name}`, device);
            if (device.name) this.agregarDevice(device);
          }
        );
      }, true);
    }

    componentWillUnmount() {
      this.manager.stopDeviceScan();
    }

    agregarCaracteristicaArray = arr => {
      arr.forEach(c => this.agregarCaracteristica(c));
    };

    buscarDevice = deviceID => {
      const { devices } = this.state;
      const list = devices.filter(({ id }) => id === deviceID);
      return list.length > 0 ? list.pop() : null;
    };

    agregarServicios = servicios => {
      servicios.forEach(s => this.agregarServicio(s));
    };

    agregarServicio = s => {
      const { filtro } = this.state;

      const cod = shortUUID(s.uuid);
      if (filtro && !_.includes(filtro, cod)) return null;

      const { devices } = this.state;
      const list = devices.filter(({ id }) => id === s.deviceID);
      if (list.length === 0) {
        console.log(`device ${s.deviceID} no encontrado, no se agregó servicio`);
        return null;
      }

      const device = list.pop();
      if (!device.servicios) {
        device.servicios = [];
      }

      if (this.deviceTieneServicio(device, s)) {
        console.log(`device ${device.id} ya tiene servicio ${s.uuid}`);
        return null;
      }

      const isoServ = buscarServicio(s.uuid);
      const name = isoServ ? isoServ.name : 'UUID no encontrado';
      const servi = { ...s, name };

      device.servicios = [...device.servicios, servi];

      const newDevs = devices.map(d => (d.id === s.deviceID ? device : d));
      this.setState({ devices: newDevs });

      return null;
    };

    deviceTieneServicio = (device, serv) => {
      if (device.servicios.length === 0) return false;
      return device.servicios.filter(s => s.uuid === serv.uuid).length > 0;
    };

    procesarServicios = device => {
      device
        .connect()
        .then(d => d.discoverAllServicesAndCharacteristics())
        .then(d => {
          // Do work on device with services and characteristics
          console.log('services and characteristics', d);
        })
        .catch(error => {
          console.log('error', error);
        });
    };

    logError = e => {
      console.log(e);
    };

    log = e => {
      console.log(e);
    };

    filtrarServBuscados = services => {
      console.log(`buscando servicio ${serv} en`, services);

      return services.filter(s => compareUUID(s.uuid, serv));
    };

    agregarDevice = device => {
      const { devices } = this.state;
      if (devices.filter(d => d.name === device.name).length > 0) return;

      this.setState({ devices: [...devices, device] });

      device
        .connect()
        .then(d => d.discoverAllServicesAndCharacteristics())
        .then(d =>
          d
            .services()
            .then(services => {
              const servBuscados = this.filtrarServBuscados(services);
              this.agregarServicios(servBuscados);

              const promesas = servBuscados.map(s => s.characteristics());
              return Promise.all(promesas);
            })
            .then(caracs => caracs.forEach(arr => this.agregarCaracteristicaArray(arr)))
            .catch(err => {
              console.log('err', err);
            })
        );
    };

    caracListener = (e, carac) => {
      console.log('caracListener');
      if (carac && carac.value) {
        console.log('carac.value', carac.value);
        const s = base64.decode(carac.value);

        // const array = new Uint8Array(new ArrayBuffer(decodedValue.length));
        const enc = new TextEncoder();
        const uintArray = enc.encode(s);
        // console.log(enc.encode(s)[1]);
        this.setState({ valor: uintArray.length === 1 ? uintArray[0] : uintArray[1] });

        // console.log('decodedValue', decodedValue);
        // const value = parseFloat(decodedValue);
        // console.log('value', value);
      }
    };

    onCaracSelected = carac => {
      const { deviceID, serviceUUID, uuid, isWritableWithoutResponse } = carac;

      this.setState({ carac });

      console.log('c.isWritableWithoutResponse', isWritableWithoutResponse);

      this.subs = this.manager.monitorCharacteristicForDevice(
        deviceID,
        serviceUUID,
        uuid,
        this.caracListener,
        '123456789'
      );
    };

    onDeviceSelected = device => () => {
      this.setState({ device });
      this.manager.stopDeviceScan();

      device
        .connect()
        .then(d => d.discoverAllServicesAndCharacteristics())
        .then(d =>
          d
            .services()
            .then(services => {
              this.agregarServicios(services);

              const promesas = services.map(s => s.characteristics());
              return Promise.all(promesas);
            })
            .then(caracs => caracs.forEach(arr => this.agregarCaracteristicaArray(arr)))
            .catch(err => {
              console.log('err', err);
            })
        );
    };

    async requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: 'Se necesita acceso bluetooth',
            message:
              'Necesario para poder acceder a los dispositivos  ' + 'y poder medir los indicadores.'
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          this.setState({ permisoConcedido: true });
        } else {
          console.log('Camera permission denied');
          this.setState({ permisoConcedido: false });
        }
      } catch (err) {
        console.warn(err);
      }
    }

    agregarCaracteristica(c) {
      console.log('agregarCaracteristica', c);
      const { devices } = this.state;
      const { deviceID, serviceUUID } = c;

      const device = this.buscarDevice(deviceID);
      if (!device) {
        console.log(`device ${deviceID} no encontrado, no se agregó carac`);
        return;
      }

      const servicio = servicioParaDeviceByUUID(device, serviceUUID);

      if (!servicio) {
        console.log(`device ${device.id} no tiene servicio ${serviceUUID}, no agrega carac`);
        return;
      }

      if (!servicio.caracs) servicio.caracs = [];

      const isoName = buscarCaracteristica(c.uuid);
      const car = { ...c, name: isoName ? isoName.name : 'UUID no encontrado' };

      servicio.caracs = [...servicio.caracs, car];

      const newServs = device.servicios.map(s => (s.uuid === serviceUUID ? servicio : s));
      const newDev = { ...device, servicios: newServs };
      const newDevs = devices.map(d => (d.id === deviceID ? newDev : d));

      this.setState({ devices: newDevs });
    }

    render() {
      return <WrappedComponent {...this.props} value={42} />;
    }
  }

  return HOC;
};

export default conBluetooth;
