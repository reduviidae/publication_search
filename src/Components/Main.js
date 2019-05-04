import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
        <h1>{process.env.REACT_APP_TEST}</h1>
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
