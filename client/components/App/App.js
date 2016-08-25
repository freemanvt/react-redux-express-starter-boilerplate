import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

// App layout styles at /styles/layout.scss
export default class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  static childContextTypes = {
    location: PropTypes.object
  }

  getChildContext() {
    return { location: this.props.location };
  }

  render() {
    return (
      <div id="root" className="container">
        <Header />
        <div id="content" >
          {this.props.children}
        </div>
        <p></p>
        <Footer />

      </div>
    );
  }
}
