import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Root, Container } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeNav from './src/navs/HomeNav';

export default class App extends React.Component {
  state = {
    loading: false
  };

  render() {
    const { loading } = this.state;

    return (
      <Provider store={store}>
        <Root>
          <Container>{loading ? <ActivityIndicator /> : <HomeNav />}</Container>
        </Root>
      </Provider>
    );
  }
}

/*
<Container>{loading ? <ActivityIndicator /> : <BlueConfig />}</Container>
*/
