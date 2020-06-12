import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Pages/Home';
import CreatePoint from './Pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/create-point"/>
        </BrowserRouter>
    );
}
export default Routes;