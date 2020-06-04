import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import App from '../App'

const AppRouter =()=>(
    <BrowserRouter>
    <div>
        <Switch>
        <Route path = "/" component = {App} exact = {true} />
        <Route component ={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;