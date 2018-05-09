import React from 'react'
import PropTypes from 'prop-types';
import { Switch, Route, NavLink } from 'react-router-dom'
import Repo from './Repo.js'

export default class ReposPage extends React.Component{

    handleSubmit(event) {
        event.preventDefault()
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        this.props.history.push(path);
    }

    render() {
        const {match} = this.props;

        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><NavLink to="/repos/reactjs/react-router" exact activeClassName="active">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react" exact activeClassName="active">React</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" placeholder="userName"/> / {' '}
                            <input type="text" placeholder="repo"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                <Switch>
                    <Route path={`${match.path}/:userName/:repoName`} component={Repo} />
                </Switch>
            </div>
        )
    }
}

ReposPage.contextTypes = {
    router: PropTypes.object
}