import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { StyleSheet } from 'react-native';
import base64 from 'base-64';
import {
  Toast, Button, Body, Text, List, ListItem, Left, Right, Icon, View
} from 'native-base';
import { BleManager } from 'react-native-ble-plx';
import buscarCaracteristica from './Caracteristicas';
import buscarServicio, { shortUUID } from './Servicios';

const Pasos = {
  SEL_DISP: 1,
  SEL_SERV: 2,
  TAKE_MEASURE: 3
};

const servicioParaDeviceByUUID = (device, serviceUUID) => {
  const list = device.servicios.filter(s => s.uuid === serviceUUID);
  return list.length > 0 ? list.pop() : null;
};

// function convertDataURIToBinary(dataURI) {
//   const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
//   const base64 = dataURI.substring(base64Index);
//   const raw = window.atob(base64);
//   const rawLength = raw.length;
//
//   const array = new Uint8Array(new ArrayBuffer(rawLength));
//   for (i = 0; i < rawLength; i++) {
//     array[i] = raw.charCodeAt(i);
//   }
//   return array;
// }
export default class App extends Component {
  constructor(props) {
    super(props);
    this.manager = new BleManager();
    this.state = {
      carac: null,
      valor: null,
      paso: Pasos.SEL_DISP,
      devices: [],
      device: null,
      filtro: null
      // filtro: ['0x180D']
    };
  }

  componentDidMount() {
    this.manager.onStateChange((newState) => {
      // console.log("newState", newState);
      if (newState !== 'PoweredOn') return;
      this.log('Started scanning...');
      this.manager.startDeviceScan(
        null,
        {
          allowDuplicates: true
        },
        (error, device) => {
          if (error) {
            Toast.show({
              text: `Error: ${error.message}`
            });
            return;
          }
          this.log(`Device: ${device.name}`, device);
          if (device.name) this.agregarDevice(device);
        }
      );
    }, true);
  }

  agregarCaracteristicaArray = (arr) => {
    arr.forEach(c => this.agregarCaracteristica(c));
  };

  buscarDevice = (deviceID) => {
    const { devices } = this.state;
    const list = devices.filter(({ id }) => id === deviceID);
    return list.length > 0 ? list.pop() : null;
  };

  agregarServicios = (servicios) => {
    servicios.forEach(s => this.agregarServicio(s));
  };

  agregarServicio = (s) => {
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

  procesarServicios = (device) => {
    device
      .connect()
      .then(d => d.discoverAllServicesAndCharacteristics())
      .then((d) => {
        // Do work on device with services and characteristics
        console.log('services and characteristics', d);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  logError = (e) => {
    console.log(e);
  };

  log = (e) => {
    console.log(e);
  };

  agregarDevice = (device) => {
    const { devices } = this.state;
    if (devices.filter(d => d.name === device.name).length > 0) return;

    this.setState({ devices: [...devices, device] });
  };

  deviceList = () => {
    const { devices } = this.state;
    return (
      <List>
        {devices.map(d => (
          <Fragment key={d.id}>
            <ListItem icon key={d.id} onPress={this.onDeviceSelected(d)}>
              <Left>
                <Button style={{ backgroundColor: '#007AFF' }}>
                  <Icon active name="bluetooth" />
                </Button>
              </Left>
              <Body>
                <Text>{d.name}</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            {this.serviceList(d)}
          </Fragment>
        ))}
      </List>
    );
  };

  caracListener = (e, carac) => {
    console.log('caracListener');
    if (carac && carac.value) {
      console.log('carac.value', carac.value);
      const s = base64.decode(carac.value);

      // const array = new Uint8Array(new ArrayBuffer(decodedValue.length));
      const enc = new TextEncoder();
      // console.log(enc.encode(s)[1]);
      this.setState({ valor: enc.encode(s)[1] });

      // console.log('decodedValue', decodedValue);
      // const value = parseFloat(decodedValue);
      // console.log('value', value);
    }
  };

  onCaracSelected = (carac) => {
    const {
      deviceID, serviceUUID, uuid, isWritableWithoutResponse
    } = carac;

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

  caracteristicas = (s) => {
    const { caracs } = s;

    if (!caracs || caracs.length === 0) return null;

    return (
      <List>
        <ListItem key="123456">
          <Text>
            {caracs.length}
            {' '}
características
          </Text>
        </ListItem>

        {caracs.map(c => (
          <ListItem icon key={c.uuid} onPress={() => this.onCaracSelected(c)}>
            <Text>{c.name}</Text>
          </ListItem>
        ))}
      </List>
    );
  };

  serviceList = (device) => {
    const services = device.servicios;

    if (!services || services.length === 0) return null;

    return (
      <List>
        <ListItem key="123456">
          <Text>
            Hay
            {services.length}
            {' '}
servicios
          </Text>
        </ListItem>

        {services.map(s => (
          <Fragment key={s.uuid}>
            <ListItem>
              <Text>{s.name}</Text>
            </ListItem>
            {this.caracteristicas(s)}
          </Fragment>
        ))}
      </List>
    );
  };

  onDeviceSelected = device => () => {
    this.setState({ device });
    this.manager.stopDeviceScan();

    device
      .connect()
      .then(d => d.discoverAllServicesAndCharacteristics())
      .then(d => d
        .services()
        .then((services) => {
          this.agregarServicios(services);

          const promesas = services.map(s => s.characteristics());
          return Promise.all(promesas);
        })
        .then(caracs => caracs.forEach(arr => this.agregarCaracteristicaArray(arr)))
        .catch((err) => {
          console.log('err', err);
        }));
  };

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
    const {
      carac, paso, device, valor
    } = this.state;
    if (carac) {
      return (
        <View style={styles.hrmContainer}>
          <Text>{carac.name}</Text>
          <Text style={styles.bigText}>{valor}</Text>
        </View>
      );
    }
    console.log('device', device);
    if (paso === Pasos.SEL_DISP) {
      return (
        <View>
          <List>
            <ListItem>
              <Text>Selecciona el dispositivo para mostrar los servicios</Text>
            </ListItem>
          </List>
          {this.deviceList()}
        </View>
      );
    }

    return (
      <View>
        <Text>Etapa sin definir</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hrmContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 90
  }
  //   return <View style={styles.hrmContainer}><Text style={styles.bigText}>{valor}</Text></View>;
  // }
});
