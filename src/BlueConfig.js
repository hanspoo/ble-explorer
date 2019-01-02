import React from 'react';
import { Text } from 'react-native';
import { Button, Content } from 'native-base';
import Blue from './Blue';

export default class BlueManager extends React.Component {
  state = { scanning: false };

  toggle = () => {
    const { scanning } = this.state;
    this.setState({ scanning: !scanning });
  };

  render() {
    const { scanning } = this.state;
    return (
      <Content>
        <Button block primary onPress={this.toggle}>
          <Text> Toggle Scan </Text>
        </Button>
        {scanning && <Blue />}
      </Content>
    );
  }
}
