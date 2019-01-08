import React from 'react';

import { Container, Content } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import RealApp from '../../RealApp';
import DetailsScreen from '../../src/navs/DetailsScreen';
import IndicadorBlue from '../../src/indicadores/IndicadorBlue';

import carlitos from '../../datos/carlitos';

const hrm = {
  id: 1,
  nombre: 'Ritmo Cardiaco',
  icono: 'heart'
};

const nativeBaseDec = story => (
  <Container>
    <Content>{story()}</Content>
  </Container>
);

storiesOf('Detalles Persona', module) //
  // .addDecorator(nativeBaseDec)
  // .add('Persona', () => <DetailsScreen adulto={carlitos} />)
  .add('Indicador blue', () => <IndicadorBlue indi={hrm} />);
storiesOf('App Full', module).add('Aplicación completa', () => <RealApp />);
