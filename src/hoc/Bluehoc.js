import React from 'react';
import _ from 'lodash';
import { PermissionsAndroid, Alert } from 'react-native';
import { Spinner } from 'native-base';
import base64 from 'base-64';
import { BleManager } from 'react-native-ble-plx';
import buscarServicio, { shortUUID } from '../Servicios';

const compareUUID = (uuid, uuidCorto) => {
  if (!uuid || uuid.length < 16) {
    throw new Error(`Debe entregar el uuid ${uuid}`);
  }
  if (!uuidCorto || uuidCorto.length < 4) {
    throw new Error(`Debe entregar el uuidCorto ${uuidCorto}`);
  }

  return shortUUID(uuid) === uuidCorto;
};

const conBluetooth = (serv, carac, WrappedComponent) => {
  class HOC extends React.Component {
    state = {};

    constructor(props) {
      super(props);
      this.manager = new BleManager();
      this.state = {
        permisoConcedido: null,
        valor: null,
        devices: [],
        filtro: null
      };
    }

    componentDidMount() {
      this.requestCameraPermission();
      this.manager.onStateChange(newState => {
        if (newState !== 'PoweredOn') return;
        this.log('Started scanning...');
        this.manager.startDeviceScan(
          null,
          {
            allowDuplicates: false
          },
          (error, device) => {
            if (error) {
              console.log('Error device', device);
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
        // console.log(`device ${device.id} ya tiene servicio ${s.uuid}`);
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

    logError = e => {
      // console.log(e);
    };

    log = e => {
      // console.log(e);
    };

    filtrarServBuscados = services => services.filter(s => compareUUID(s.uuid, serv));

    filtrarCaracDestino = caracs => caracs.find(c => compareUUID(c.uuid, carac));
    // filtrarCaracDestino = caracs => null;

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
              const promesas = servBuscados.map(s => s.characteristics());
              return Promise.all(promesas);
            })
            .then(caracsArrays => {
              caracsArrays.forEach(caracs => {
                console.log('caracs', caracs);
                const caracBuscada = this.filtrarCaracDestino(caracs);
                if (caracBuscada) {
                  this.onCaracSelected(caracBuscada);
                }
              });
            })
            .catch(err => {
              console.log('err', err);
            })
        );
    };

    caracListener = (e, c) => {
      console.log('caracListener', e);
      // console.log(`Activando listener de característica ${c.uuid}`);
      if (c && c.value) {
        // console.log('c.value', c.value);
        const s = base64.decode(c.value);

        // const array = new Uint8Array(new ArrayBuffer(decodedValue.length));
        const enc = new TextEncoder();
        const uintArray = enc.encode(s);
        // // console.log(enc.encode(s)[1]);
        this.setState({ valor: uintArray.length === 1 ? uintArray[0] : uintArray[1] });

        // // console.log('decodedValue', decodedValue);
        // const value = parseFloat(decodedValue);
        // // console.log('value', value);
      }
    };

    onCaracSelected = c => {
      const { deviceID, serviceUUID, uuid, isWritableWithoutResponse } = c;

      // console.log('c.isWritableWithoutResponse', isWritableWithoutResponse);

      this.subs = this.manager.monitorCharacteristicForDevice(
        deviceID,
        serviceUUID,
        uuid,
        this.caracListener,
        '123456789'
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
          // console.log('You can use the camera');
          this.setState({ permisoConcedido: true });
        } else {
          // console.log('Camera permission denied');
          this.setState({ permisoConcedido: false });
        }
      } catch (err) {
        console.warn(err);
      }
    }

    render() {
      const { valor, permisoConcedido } = this.state;
      if (permisoConcedido === null) return <Spinner />;
      if (permisoConcedido === false) {
        Alert.alert('Debe habilitar localización para usar este servicio');
      }

      return <WrappedComponent {...this.props} value={valor} />;
    }
  }

  return HOC;
};

export default conBluetooth;
