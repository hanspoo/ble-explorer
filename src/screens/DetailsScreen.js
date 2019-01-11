import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { shape, func } from 'prop-types';
import DetailsComponent from '../components/DetailsComponent';
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

    return <DetailsComponent adulto={adulto} />;
  }
}

const s2p = state => ({ adulto: state.adultosReducer.adulto });
export default connect(s2p)(DetailsScreen);
