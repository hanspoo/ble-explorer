import React from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import { BleManager } from "react-native-ble-plx";

export default class Red extends React.Component {
  constructor() {
    super();
    this.manager = new BleManager();
    this.state = { info: "", values: {} };
    this.prefixUUID = "f000aa";
    this.suffixUUID = "-0451-4000-b000-000000000000";
    this.sensors = {
      0: "Temperature",
      1: "Accelerometer",
      2: "Humidity",
      3: "Magnetometer",
      4: "Barometer",
      5: "Gyroscope"
    };
  }

  componentWillMount() {
    if (Platform.OS === "ios") {
      this.manager.onStateChange(state => {
        if (state === "PoweredOn") this.scanAndConnect();
      });
    } else {
      this.scanAndConnect();
    }
  }
  async setupNotifications(device) {
    console.log("setupNotifications", device);
    // for (const id in this.sensors) {
    //   const service = this.serviceUUID(id);
    //   const characteristicW = this.writeUUID(id);
    //   const characteristicN = this.notifyUUID(id);
    //
    //   const characteristic = await device.writeCharacteristicWithResponseForService(
    //     service,
    //     characteristicW,
    //     "AQ==" /* 0x01 in hex */
    //   );
    //
    //   device.monitorCharacteristicForService(
    //     service,
    //     characteristicN,
    //     (error, characteristic) => {
    //       if (error) {
    //         this.error(error.message);
    //         return;
    //       }
    //       this.updateValue(characteristic.uuid, characteristic.value);
    //     }
    //   );
    // }
  }

  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      this.info("Scanning...");
      console.log(device);

      if (error) {
        this.error(error.message);
        return;
      }

      if (device.name === "TI BLE Sensor Tag" || device.name === "SensorTag") {
        this.info("Connecting to TI Sensor");
        this.manager.stopDeviceScan();
        device
          .connect()
          .then(dev => {
            this.info("Discovering services and characteristics");
            return dev.discoverAllServicesAndCharacteristics();
          })
          .then(dev => {
            this.info("Setting notifications");
            return this.setupNotifications(dev);
          })
          .then(
            () => {
              this.info("Listening...");
            },
            err => {
              this.error(err.message);
            }
          );
      }
    });
  }

  serviceUUID(num) {
    return `${this.prefixUUID + num}0${this.suffixUUID}`;
  }

  notifyUUID(num) {
    return `${this.prefixUUID + num}1${this.suffixUUID}`;
  }

  writeUUID(num) {
    return `${this.prefixUUID + num}2${this.suffixUUID}`;
  }
  info(message) {
    this.setState({ info: message });
  }

  error(message) {
    this.setState({ info: `ERROR: ${message}` });
  }

  updateValue(key, value) {
    this.setState({ values: { ...this.state.values, [key]: value } });
  }
  render() {
    return (
      <View>
        <Text>{this.state.info}</Text>
        {Object.keys(this.sensors).map(key => {
          return (
            <Text key={key}>
              {`${this.sensors[key]}: ${this.state.values[
                this.notifyUUID(key)
              ] || "-"}`}
            </Text>
          );
        })}
      </View>
    );
  }
}
