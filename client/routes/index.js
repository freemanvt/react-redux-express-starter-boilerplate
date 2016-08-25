/**
 * Configure your routes here
 */
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from '../components/App';
import About from './About/About';
import Home from './Home/Home';
import Contact from './Contact/Contact';

export default class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route component={App}>
          <Route path="/" component={Home}/>
          <Route path="about" component={About}/>
          <Route path="contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};
