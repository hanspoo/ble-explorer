import { View, StyleSheet } from 'react-native';
import React from 'react';
import { shape } from 'prop-types';
import IndicadorAdulto from './IndicadorAdulto';
import IndicadorBlue from './IndicadorBlue';
import { tipoAdulto } from '../types/tipos';

const indicadores = [
  {
    id: 1,
    nombre: 'Ritmo Cardiaco',
    icono: 'heart'
  },
  {
    id: 2,
    nombre: 'Peso',
    icono: 'user'
  }
];

export default class IndicadoresAdulto extends React.Component {
  state = { indi: null };

  static propTypes = {
    adulto: shape(tipoAdulto).isRequired
  };

  seleccionarIndicador = id => {
    const indi = indicadores.filter(iter => iter.id === id).pop();
    this.setState({ indi });
  };

  render() {
    const { adulto } = this.props;
    const { indi } = this.state;

    if (indi) {
      return <IndicadorBlue indi={indi} addMedicion={this.addMedicion} />;
    }
    return (
      <View style={styles.container}>
        {indicadores.map(indi => (
          <IndicadorAdulto
            seleccionarIndicador={this.seleccionarIndicador}
            indi={indi}
            adulto={adulto}
            key={indi.id}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});
