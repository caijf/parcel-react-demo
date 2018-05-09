import React from 'react'
import { NavLink } from 'react-router-dom'

export default class App extends React.Component{
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
