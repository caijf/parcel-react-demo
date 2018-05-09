import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

render((
    <HashRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/repos" component={Repos} />
                <Route path="/about" component={About}/>
                <Redirect to="/" />
            </Switch>
        </App>
    </HashRouter>
), document.getElementById('root'))
