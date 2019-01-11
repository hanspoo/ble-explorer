import React from 'react';

import { Text, View, Root, Container, Content } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import RealApp from '../../RealApp';
import IndicadorBlue from '../../src/indicadores/IndicadorBlue';
import Blue from '../../src/Blue';
import conBluetooth from '../../src/hoc/Bluehoc';
import carlitos from '../../datos/carlitos';
import DetailsComponent from '../../src/components/DetailsComponent';
import IndicadorAdulto from '../../src/indicadores/IndicadorAdulto';

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
const indi = {
  id: 1,
  nombre: 'Ritmo Cardiaco',
  icono: 'heart'
};

console.log('CustomComp', typeof CustomComp);
storiesOf('Detalles Persona', module) //
  .addDecorator(nativeBaseDec)
  .add('Blue tooth scanner', () => <Blue />)
  .add('HrmView', () => <HrmView />)
  .add('CustomComp 1', () => <CustomComp />)
  .add('Detalle Persona carlitos', () => <DetailsComponent adulto={carlitos} />)
  .add('Detalle sin persona', () => <DetailsComponent adulto={null} />)
  .add('Botón del indicador', () => (
    <IndicadorAdulto
      seleccionarIndicador={() => console.log('Seleccionando indicador')}
      indi={indi}
      adulto={carlitos}
      key={indi.id}
    />
  ))
  .add('Indicador blue sin valor', () => <IndicadorBlue indi={hrm} />)
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
