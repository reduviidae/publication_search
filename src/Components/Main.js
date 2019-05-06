import React, { Component } from "react";
import { connect } from "react-redux";

import { PLAIN_HEADERS } from "../constants";

class Main extends Component {
  componentDidMount () {
    this.fetchList();
  }

  fetchList = () => {
    fetch(`${process.env.REACT_APP_EPRH_AUTH_URL}`, {
      method: 'GET',
      headers: PLAIN_HEADERS
    })
    .then(r => r.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data: state.data
  };
}

export default connect(mapStateToProps)(Main);
