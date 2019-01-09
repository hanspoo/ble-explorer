import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, Spinner } from 'native-base';
import { shape, number } from 'prop-types';
import { tipoIndicador } from '../types/tipos';
import conBluetooth from '../hoc/Bluehoc';

class IndicadorBlue extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params ? navigation.state.params.title : 'Sin título'}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white'
    }
  });

  static propTypes = {
    value: number,
    indi: shape(tipoIndicador).isRequired
  };

  static defaultProps = {
    value: null
  };

  state = {};

  render() {
    const { indi, value } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{indi.nombre}</Text>
        <Icon name={indi.icono} style={styles.icon} type="FontAwesome" />

        {value !== null ? (
          <Text style={styles.value}>{value}</Text>
        ) : (
          <View>
            <Spinner />
            <Text>Buscando dispositivos...</Text>
          </View>
        )}
      </View>
    );
  }
}

// <Icon ios="ios-menu" android="md-menu" style={{ fontSize: 20, color: 'red' }} />
// <Icon type="FontAwesome" name="home" />

const styles = StyleSheet.create({
  blueIcon: { color: 'blue', fontSize: 20, marginRight: 4 },
  text: { fontSize: 18, color: 'black', fontWeight: 'bold' },
  value: { fontSize: 64, color: 'rgba(255,0,0,0.5)' },
  icon: { fontSize: 64, color: 'rgba(255,0,0,0.5)' },
  container: {
    flex: 1,
    // borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
    // height: 100,
    // backgroundColor: 'pink'
    // width: '50%',
    // borderWidth: 1,
    // borderColor: '#666',
    // margin: 2
  }
});

export default conBluetooth('0x180D', '0x2A37', IndicadorBlue);
