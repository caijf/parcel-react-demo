import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import {get} from 'axios'

const StyledWrapper = styled.div`
	position: relative;
	height: 300px;
	width: 100%;
`;

const testApi = 'http://localhost/cps-tpm/api/bill.htm';

get(testApi).then((res)=>{
  console.log(res);
});

export default class App extends React.Component{
  render() {
	// const this.props;

    return (
      <div>
        <h1>React Animation</h1>
        <ul role="nav">
          <li><NavLink to="/carousel" exact activeClassName="active">Carousel</NavLink></li>
          <li><NavLink to="/router" exact activeClassName="active">RouterTransition</NavLink></li>
        </ul>
		    <StyledWrapper >
        	{this.props.children}
        </StyledWrapper>
      </div>
    )
  }
}
