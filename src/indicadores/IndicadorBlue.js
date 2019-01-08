import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, Spinner } from 'native-base';
import { shape } from 'prop-types';
import { tipoIndicador } from '../types/tipos';

export default class Indicador extends React.Component {
  static propTypes = {
    indi: shape(tipoIndicador).isRequired
  };

  state = {};

  render() {
    const { indi } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{indi.nombre}</Text>
        <Icon name={indi.icono} style={styles.icon} type="FontAwesome" />

        <Spinner />
        <View style={{ flexDirection: 'row' }}>
          <Icon name="bluetooth" style={styles.blueIcon} type="FontAwesome" />
          <Text>Buscando dispositivos...</Text>
        </View>
      </View>
    );
  }
}

// <Icon ios="ios-menu" android="md-menu" style={{ fontSize: 20, color: 'red' }} />
// <Icon type="FontAwesome" name="home" />

const styles = StyleSheet.create({
  blueIcon: { color: 'blue', fontSize: 20, marginRight: 4 },
  text: { fontSize: 18, color: 'black', fontWeight: 'bold' },
  icon: { fontSize: 64, color: 'rgba(255,0,0,0.5)' },
  container: {
    flex: 1,
    // borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
    // height: 100,
    // backgroundColor: '#eee',
    // width: '50%',
    // borderWidth: 1,
    // borderColor: '#666',
    // margin: 2
  }
});
