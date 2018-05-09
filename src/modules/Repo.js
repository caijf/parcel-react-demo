import React from 'react'
// import { withRouter } from 'react-router-dom'

export default class Repo extends React.Component{
  render() {
    const { userName, repoName } = this.props.match.params;
    return (
      <div>
        <h2>{userName} / {repoName}</h2>
      </div>
    )
  }
}

// const RepoWithRoute = withRouter(Repo);


// export default RepoWithRoute;