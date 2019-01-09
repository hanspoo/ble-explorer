import React from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import { Spinner } from 'native-base';
import base64 from 'base-64';
import { BleManager } from 'react-native-ble-plx';
import { shortUUID } from '../Servicios';

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
        devices: []
      };
    }

    componentDidMount() {
      this.requestCameraPermission();
      this.manager.onStateChange(newState => {
        if (newState !== 'PoweredOn') return;
        console.log('Started scanning...');
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
            if (device.name) this.agregarDevice(device);
          }
        );
      }, true);
    }

    componentWillUnmount() {
      this.manager.stopDeviceScan();
    }

    filtrarServBuscados = services => services.filter(s => compareUUID(s.uuid, serv));

    filtrarCaracDestino = caracs => caracs.find(c => compareUUID(c.uuid, carac));

    agregarDevice = device => {
      const { devices } = this.state;
      if (devices.filter(d => d.name === device.name).length > 0) return;

      this.setState({ devices: [...devices, device] });

      device
        .connect()
        .then(d => d.discoverAllServicesAndCharacteristics())
        .then(d => {
          d.services()
            .then(services => {
              const servBuscados = this.filtrarServBuscados(services);
              const promesas = servBuscados.map(s => s.characteristics());
              return Promise.all(promesas);
            })
            .then(caracsArrays => {
              caracsArrays.forEach(caracs => {
                const caracBuscada = this.filtrarCaracDestino(caracs);
                if (caracBuscada) {
                  this.onCaracSelected(caracBuscada);
                }
              });
            })
            .catch(err => {
              console.err('err', err);
            });
        });
    };

    caracListener = (e, c) => {
      if (c && c.value) {
        const s = base64.decode(c.value);

        const enc = new TextEncoder();
        const uintArray = enc.encode(s);
        this.setState({ valor: uintArray.length === 1 ? uintArray[0] : uintArray[1] });
      }
    };

    onCaracSelected = c => {
      const { deviceID, serviceUUID, uuid } = c;
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
            message: 'Necesario para poder acceder a los indicadores.'
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.setState({ permisoConcedido: true });
        } else {
          this.setState({ permisoConcedido: false });
        }
      } catch (err) {
        console.err(err);
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
