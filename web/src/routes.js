import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Falemais from './pages/Falemais';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Falemais} />
                <Route path="/falemais" component={Falemais} />
            </Switch>
        </BrowserRouter>
    );   
}