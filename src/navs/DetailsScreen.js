import React, { Component, Fragment } from 'react';
import { Thumbnail } from 'native-base';
import { View, Text } from 'react-native';
import { shape } from 'prop-types';

import IndicadoresAdulto from '../indicadores/IndicadoresAdulto';
import { tipoAdulto } from '../types/tipos';

export default class DetailsScreen extends Component {
  static propTypes = {
    adulto: shape(tipoAdulto).isRequired
  };

  state = {};

  render() {
    const { adulto } = this.props;
    if (!adulto) return <Text>Error interno, no hay adulto actual.</Text>;

    const { id, nombre, edad, avatar } = adulto;
    return (
      <Fragment>
        <View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center' }}>
          <Thumbnail source={{ uri: avatar }} />
          <Text>{nombre}</Text>
        </View>

        <View
          style={{
            flex: 2 / 3,
            backgroundColor: 'rgba(0,0,125,0.1)',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <IndicadoresAdulto adulto={adulto} />
        </View>
      </Fragment>
    );
  }
}
