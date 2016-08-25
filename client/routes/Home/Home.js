import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ping } from '../../actions';

import Helmet from 'react-helmet';
import PageTitle from 'client/components/PageTitle';

class Home extends Component {

  onButtonClick() {
    this.props.dispatch(ping())
  }

  render() {
    var { pingStatus } = this.props
    return (
      <div id="page-ping">
        <Helmet title="Home" />
        <PageTitle>Home</PageTitle>
        <div className="jumbotron">
          <h1 className="display-3">React Redux ExpressJS Starter Boilerplate</h1>
          <p className="lead">This component (/client/routes/Home/Home.js) has a "Ping" button that uses an async action creator (/client/actions/ping.js) to perform an async web request to "<a href="http://localhost:6628/api/ping">http://localhost:6628/api/ping</a>". Once it get's the response, the reducer (/client/reducers/ping.js) will update the "ping status" to "OK"</p>
          <button className="btn btn-lg btn-success" href="#" role="button" onClick={() => this.onButtonClick()}>Ping</button>
          <p></p>
          <p><b>Ping status?</b> { pingStatus ? pingStatus : 'No idea yet...' }</p>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>

          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>
        </div>
      </div>
    );
  }
}

// This is our select function that will extract from the state the data slice we want to expose
// through props to our component.
const mapStateToProps = (state/*, props*/) => {
  return {
    pingStatus: state.ping.status
  }
}


export default connect(mapStateToProps)(Home)
