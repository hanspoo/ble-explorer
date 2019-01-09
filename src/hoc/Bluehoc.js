import React from 'react';

const conBluetooth = (serv, carac, WrappedComponent) => {
  class HOC extends React.Component {
    state = {};

    render() {
      return <WrappedComponent {...this.props} value={42} />;
    }
  }

  return HOC;
};

export default conBluetooth;
