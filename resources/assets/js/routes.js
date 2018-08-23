import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//containers
import App from './containers/App';
import HomePage from './containers/HomePage';

//components
import Contact from './components/Contact';
import RegisterPage from './components/RegisterUser';
import LoginPage from './components/LoginUser';
import Error404 from './components/404';

const Routes = () => {
    return (
        <App>
            <Router>
                <Switch>
                <Route exact path="/" component=        {HomePage} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route component={Error404} />
                </Switch>
            </Router>
        </App>
    );

}

export default Routes;
