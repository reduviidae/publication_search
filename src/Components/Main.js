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
    .then(this.props.authorsToState)
  }

  render() {
    console.log(this.props.data);
    const authors = this.props.data.data && this.props.data.data.authors.map(author => {
      return (<div class="author_list_div">
        <h3>{author.display}</h3>
        <a href={`https://www.penguinrandomhouse.com${author.seoFriendlyUrl}`}>Penguin Website Link</a>
      </div>)
    })
    return (
      <div>
        <h1>List of Selected PRH Authors</h1>
        {authors}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      data: state.data
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authorsToState: data => dispatch({type: "GET_AUTHORS", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
