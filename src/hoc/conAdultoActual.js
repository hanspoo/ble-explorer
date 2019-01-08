import React, { Component } from 'react';
import { connect } from 'react-redux';

function conAdultoActual(WrappedComponent) {
  class ConAdultoHOC extends Component {
    state = {};

    render() {
      const {
        adultosReducer: { adulto }
      } = this.props;

      return <WrappedComponent {...this.props} adulto={adulto} />;
    }
  }
  const s2p = state => ({ adultosReducer: state.adultosReducer });
  return connect(s2p)(ConAdultoHOC);
}

export default conAdultoActual;
