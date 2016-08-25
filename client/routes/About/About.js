import React, { Component } from 'react';
import { ping } from '../../actions';

import Helmet from 'react-helmet';
import PageTitle from 'client/components/PageTitle';

class About extends Component {

  render() {
    return (
      <div id="page-about">
        <Helmet title="About Us" />
        <PageTitle>About Us</PageTitle>
        <div>
          Something about us :)
        </div>
      </div>
    );
  }
}



export default About
