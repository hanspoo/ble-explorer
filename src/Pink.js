import React from "react";
import { List, ListItem } from "native-base";
import { BleManager } from "react-native-ble-plx";
import { Text, View } from "react-native";

export default class Pink extends React.Component {
  constructor() {
    super();
    this.manager = new BleManager();
  }

  state = {
    services: []
  };

  componentWillMount() {
    const subscription = this.manager.onStateChange(state => {
      if (state === "PoweredOn") {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
  }
  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        return;
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === "benja poo" || device.name === "SCALES") {
        // Stop scanning as it's not necessary if you are scanning for one device.
        this.manager.stopDeviceScan();

        // Proceed with connection.
        device
          .connect()
          .then(d => {
            return d.discoverAllServicesAndCharacteristics();
          })
          .then(d => {
            console.log("d luego de discoverAllServicesAndCharacteristics ", d);
            // Do work on device with services and characteristics
            return d.services();
          })
          .then(services => {
            this.setState({ services });
            const promesas = services.map(s => s.characteristics());
            return Promise.all(promesas);
          })
          .then(promesas =>
            promesas.forEach(c => console.log("characteristic", c))
          )
          .catch(err => {
            // Handle errors
            console.log("err", err);
          });
      }
    });
  }
  render() {
    const { services } = this.state;
    console.log(services);
    return (
      <View>
        <Text>Hay {services.length} servicios</Text>
        <List>
          {services.map(s => (
            <ListItem key={s.id}>
              <Text>{s.uuid}</Text>
            </ListItem>
          ))}
        </List>
      </View>
    );
  }
}
