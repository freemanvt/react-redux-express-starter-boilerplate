/**
 * Root dev container that wraps the root element in a REDUX Provider element
 */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        {this.props.children}
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node
};
