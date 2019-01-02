import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Root, Container } from 'native-base';
import BlueConfig from './src/BlueConfig';
// import Pink from "./src/Pink";

export default class App extends React.Component {
  state = {
    loading: false
  };

  render() {
    const { loading } = this.state;

    return (
      <Root>
        <Container>{loading ? <ActivityIndicator /> : <BlueConfig />}</Container>
      </Root>
    );
  }
}
