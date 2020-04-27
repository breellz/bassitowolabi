import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Blog from '../components/blog/Blog'
import NotFoundPage from '../components/NotFoundPage';
import App from '../App'

const AppRouter =()=>(
    <BrowserRouter>
    <div>
        <Switch>
        <Route path = "/" component = {App} exact = {true} />
        <Route path ="/Blog/" component ={Blog} />
        <Route component ={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;