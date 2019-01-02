import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Green extends React.Component {
  async componentWillMount() {
    const { updateCharacteristic } = this.props;
    const connectedDevice = await manager.connectToDevice(device.id);
    const services = await connectedDevice.discoverAllServicesAndCharacteristics();
    const characteristic = await this.getServicesAndCharacteristics(services);
  }
  getServicesAndCharacteristics(device) {
    return new Promise((resolve, reject) => {
      device.services().then(services => {
        const characteristics = [];

        services.forEach((service, i) => {
          service.characteristics().then(c => {
            characteristics.push(c);

            if (i === services.length - 1) {
              const temp = characteristics.reduce((acc, current) => {
                return [...acc, ...current];
              }, []);
              const dialog = temp.find(
                characteristic => characteristic.isWritableWithoutResponse
              );
              if (!dialog) {
                reject("No writable characteristic");
              }
              resolve(dialog);
            }
          });
        });
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Green</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
