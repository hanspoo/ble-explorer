import React, { Component, Fragment } from 'react';
import { Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { shape, func } from 'prop-types';

import IndicadoresAdulto from '../indicadores/IndicadoresAdulto';
import { tipoAdulto } from '../types/tipos';

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params ? navigation.state.params.title : 'Sin título'}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white'
    }
  });

  static propTypes = {
    adulto: shape(tipoAdulto).isRequired,
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  state = {};

  componentDidMount() {
    const { adulto, navigation } = this.props;
    navigation.setParams({
      title: adulto.nombre
    });
  }

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

const s2p = state => ({ adulto: state.adultosReducer.adulto });
export default connect(s2p)(DetailsScreen);
