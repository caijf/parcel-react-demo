import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from './modules/App'
import Carousel from './modules/Carousel'

render((
    <HashRouter>
        <App>
            <Switch>
                <Route exact path="/carousel" component={Carousel} />
                <Route path="/carousel" component={Carousel}/>
                <Redirect to="/carousel" />
            </Switch>
        </App>
    </HashRouter>
), document.getElementById('root'))
