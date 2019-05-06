import React, { Component } from "react";
import { connect } from "react-redux";

import { PLAIN_HEADERS } from "../constants";

class AuthorList extends Component {
  componentDidMount() {
    this.fetchList();
  }

  fetchList = () => {
    fetch(`${process.env.REACT_APP_EPRH_AUTH_URL}`, {
      method: "GET",
      headers: PLAIN_HEADERS
    })
      .then(r => r.json())
      .then(this.props.authorsToState);
  };

  render() {
    console.log(this.props.data.data && this.props.data.data.authors);
    const authorList =
      this.props.data.data &&
      this.props.data.data.authors.map(author => {
        return (
          <div class="author_list_div">
            <h3 id={`author-${author.authorId}`}>{author.display}</h3>
            <a
              href={`https://www.penguinrandomhouse.com${
                author.seoFriendlyUrl
              }`}
            >
              PRH Website Link
            </a>
          </div>
        );
      });
    return <div>{authorList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authorsToState: data => dispatch({ type: "GET_AUTHORS", payload: data })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorList);
