import React from 'react';
import { Fragment, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import { shape, func } from 'prop-types';
import { tipoIndicador } from '../types/tipos';

export default class Indicador extends React.Component {
  static propTypes = {
    indi: shape(tipoIndicador).isRequired,
    seleccionarIndicador: func.isRequired
  };

  state = {};

  seleccionarIndicador = () => {
    const { indi } = this.props;
    this.props.seleccionarIndicador(indi.id);
  };

  render() {
    const { indi, seleccionarIndicador } = this.props;
    return (
      <TouchableHighlight onPress={this.seleccionarIndicador} style={styles.container}>
        <View>
          <Text style={styles.text}>{indi.nombre}</Text>
          <Icon name={indi.icono} style={styles.icon} type="FontAwesome" />
        </View>
      </TouchableHighlight>
    );
  }
}

// <Icon ios="ios-menu" android="md-menu" style={{ fontSize: 20, color: 'red' }} />
// <Icon type="FontAwesome" name="home" />

const styles = StyleSheet.create({
  text: { fontSize: 14, color: 'black', fontWeight: 'bold' },
  icon: { fontSize: 64, color: '#666' },
  container: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#eee',
    width: '50%',
    borderWidth: 1,
    borderColor: '#666',
    margin: 2
  }
});
