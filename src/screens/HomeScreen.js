import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Icon, List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';
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
    if (loading) {
      return <Text style={styles.bajada}>Cargando...</Text>;
    }
    if (errorMessage) return <Text>{errorMessage}</Text>;

    return (
      <ScrollView>
        <Text style={styles.bajada}>{`Hay ${adultos.length} personas`}</Text>

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
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bajada: { paddingLeft: 14, paddingTop: 14 }
});

const s2p = state => ({ adultosReducer: state.adultosReducer });

export default connect(
  s2p,
  { cargarAdultos, setAdultoActual }
)(HomeScreen);
