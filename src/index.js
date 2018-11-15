import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from './modules/App'
import Carousel from './modules/Carousel'
import RouterTransition from './modules/RouterTransition'

render((
    <HashRouter>
        <App>
            <Switch>
                <Route path="/carousel" component={Carousel} />
                <Route path="/router" component={RouterTransition}/>
                <Redirect to="/carousel" />
            </Switch>
        </App>
    </HashRouter>
), document.getElementById('root'))
