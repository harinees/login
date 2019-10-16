import React from 'react';
import ReactDom from 'react-dom';
import App  from './components/App';
import Loginn from './components/Loginn';
import Dashboard from './components/Dashboard';
import history from './components/history';
import { Router } from 'react-router-dom';
import { Route} from 'react-router';

ReactDom.render(<Router history={history}>
     <Route  path="/dashboard" component={Dashboard} />
     <Route exact   path="/loginn" component={Loginn} />
    <App /></Router>, document.querySelector('#root'));
