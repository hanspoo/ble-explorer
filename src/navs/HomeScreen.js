import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cargarAdultos, setAdultoActual } from '../redux/adultosReducer';

class HomeScreen extends Component {
  static propTypes = {
    adultosReducer: PropTypes.object,
    cargarAdultos: PropTypes.func.isRequired
  };

  static navigationOptions = {
    title: 'Personas'
  };

  state = {};

  componentDidMount() {
    // eslint-disable-next-line
    this.props.cargarAdultos();
  }

  gotoDetalle = id => () => {
    const {
      setAdultoActual,
      navigation: { navigate }
    } = this.props;

    setAdultoActual(id);

    const {
      adultosReducer: { adultos }
    } = this.props;

    const adulto = adultos.filter(a => a.id === id).pop();
    navigate('Details', { id, title: adulto.nombre });
  };

  render() {
    const {
      adultosReducer: { loading, errorMessage, adultos }
    } = this.props;
    if (loading) return <Text>Cargando...</Text>;
    if (errorMessage) return <Text>{errorMessage}</Text>;

    return (
      <ScrollView>
        <Text style={{ paddingLeft: 14, paddingTop: 14 }}>{`Hay ${adultos.length} personas`}</Text>

        <List>
          {adultos.map(({ id, nombre, avatar, edad }) => (
            <ListItem key={id} avatar onPress={this.gotoDetalle(id)}>
              <Left>
                <Thumbnail source={{ uri: avatar }} />
              </Left>
              <Body>
                <Text>{nombre}</Text>
                <Text note>{edad} años</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    );
  }
}

const s2p = state => ({ adultosReducer: state.adultosReducer });

export default connect(
  s2p,
  { cargarAdultos, setAdultoActual }
)(HomeScreen);
