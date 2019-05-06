import React, { Component } from "react";

const AuthorList = React.lazy(() => {
  import(/* webpackChunkName: 'AuthorList' */ "./AuthorList" )
})

class Main extends Component {

  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <h1>List of Selected PRH Authors</h1>
        <AuthorList />
      </React.Suspense>
    );
  }
}



export default Main;
