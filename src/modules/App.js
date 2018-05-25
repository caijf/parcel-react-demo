import React from 'react'
import { NavLink } from 'react-router-dom'

export default class App extends React.Component{
  render() {
    return (
      <div>
        <h1>React Animation</h1>
        <ul role="nav">
          <li><NavLink to="/carousel" exact activeClassName="active">Carousel</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
