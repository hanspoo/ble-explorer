import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Spinner, Button, Text } from 'native-base';
import { shape, number, func } from 'prop-types';
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
    indi: shape(tipoIndicador).isRequired,
    addMedicion: func.isRequired
  };

  static defaultProps = {
    value: null
  };

  state = {};

  agregarMedicion = () => {
    const { value, addMedicion } = this.props;
    addMedicion(value);
  };

  render() {
    const { indi, value } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name={indi.icono} style={styles.icon} type="FontAwesome" />
          <Text style={styles.nombreIndicador}>{indi.nombre}</Text>
        </View>

        {!!value && <Text style={styles.value}>{value}</Text>}

        {value !== null ? (
          <View style={{ flexDirection: 'row' }}>
            <Button block primary onPress={this.agregarMedicion}>
              <Text>Grabar</Text>
            </Button>
            <Button block light>
              <Text>Leer nuevamente</Text>
            </Button>
          </View>
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
  nombreIndicador: { marginLeft: 7, fontSize: 18, color: 'black', fontWeight: 'bold' },
  value: { fontSize: 128, color: 'rgba(255,0,0,0.5)' },
  icon: { fontSize: 18, color: 'rgba(255,0,0,0.5)' },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 14
    // borderRadius: 7,

    // height: 100,
    // backgroundColor: 'pink'
    // width: '50%',
    // borderWidth: 1,
    // borderColor: '#666',
    // margin: 2
  }
});

export default conBluetooth('0x180D', '0x2A37', IndicadorBlue);
