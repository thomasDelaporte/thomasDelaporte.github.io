import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from './components/Layout';

import Home from './pages/Home';
import Error from './pages/404';
import About from './pages/About';
import Interships from './pages/Internships';
import InternshipsALIONAX from './pages/interships/alionax';
import IntershipsECF from './pages/interships/ecf';
import Contact from './pages/Contact';
import Other from './pages/Other';

import "./styles/main.scss";

const Main = (props) => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Layout>
            <Switch location={props.location}>

                <Route exact path='/about' component={About} />
                <Route exact path='/' component={Home} />

                <Route exact path='/interships' component={Interships} />
                <Route exact path='/internships/ecf' component={IntershipsECF} />
                <Route exact path='/internships/alionax' component={InternshipsALIONAX} />

                <Route exact path='/contact' component={Contact} />

                <Route exact path='/other' component={Other} />

                <Route path='*' component={Error} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

ReactDOM.render(
    <Main />, document.getElementById('app')
);