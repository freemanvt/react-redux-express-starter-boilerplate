import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

import Helmet from 'react-helmet';
import PageTitle from 'client/components/PageTitle';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {textValue: ''};
  }

  onAddItemClick() {
    var input = this.refs.myInput;
    var inputValue = input.value;
    this.props.dispatch(addItem(inputValue))
  }

  handleInputChange(event) {
    this.setState({textValue: event.target.value});
  }

  render() {
    var {itemsArray } = this.props
    var displayItem
    if (!itemsArray || itemsArray.length === 0) {
      displayItem = <p>No idea yet</p>
    } else {
      displayItem = <p>{itemsArray.join()}</p>
    }
    return (
      <div id="page-about">
        <Helmet title="About Us" />
        <PageTitle>Contact Us</PageTitle>
        <div>
          <p>This component (/client/routes/Contact/Contact.js) uses a synchronous action creator (/client/actions/items.js) to return an action to add an item to the array used by the items reducer (/client/reducers/items.js).</p>
          <p>
            <input ref="myInput" type="text" placeholder="What would you like to contact us about?" className="form-control" value={this.state.textValue} onChange={(evt) => this.handleInputChange(evt)}/>
          </p>
          <p>
            <button className="btn btn-lg btn-success" href="#" role="button" onClick={() => this.onAddItemClick()}>Add</button>
          </p>
          <p>
          </p>
          <div>
            { displayItem }
          </div>
        </div>
        <div>
          freemanvt@gmail.com
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    itemsArray: state.items
  }
}


export default connect(mapStateToProps)(Contact)

