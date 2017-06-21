import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

//Layout
import MainLayout from './components/MainLayout';

//Pages
import Home from './components/Home'
import Print from './components/Print'
import Web from './components/Web'
import LostCats from './components/LostCats'
import Contact from './components/Contact'




export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />

            <Route path="print" component={Print} />

            <Route path="web" component={Web} />

            <Route path="lost-cats" component={LostCats} />

            <Route path="contact" component={Contact} />
        </Route>
    </Router>
)
