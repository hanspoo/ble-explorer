import React from 'react';

import { Text, View, Root, Container, Content } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import RealApp from '../../RealApp';
import DetailsScreen from '../../src/navs/DetailsScreen';
import IndicadorBlue from '../../src/indicadores/IndicadorBlue';
import Blue from '../../src/Blue';
import conBluetooth from '../../src/hoc/Bluehoc';
import carlitos from '../../datos/carlitos';

const hrm = {
  id: 1,
  nombre: 'Ritmo Cardiaco',
  icono: 'heart'
};

const nativeBaseDec = story => (
  <Root>
    <Container>
      <Content>{story()}</Content>
    </Container>
  </Root>
);

/* eslint react/prop-types: 0 */

class HrmView extends React.Component {
  state = {};

  render() {
    console.log('props', this.props);
    const { value } = this.props;
    return (
      <View style={styles.centered}>
        <Text>
          HRM:
          {value}
        </Text>
      </View>
    );
  }
}

const CustomComp = conBluetooth('0x180D', '0x2A37', HrmView);

console.log('CustomComp', typeof CustomComp);
storiesOf('Detalles Persona', module) //
  .addDecorator(nativeBaseDec)
  .add('Blue tooth scanner', () => <Blue />)
  .add('HrmView', () => <HrmView />)
  .add('CustomComp 1', () => <CustomComp />)
  .add('Indicador blue', () => <IndicadorBlue indi={hrm} />);

storiesOf('App Full', module) //
  .add('Aplicación completa', () => <RealApp />);

const styles = {
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
