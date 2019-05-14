import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Time from './time/time';
import Clock from './clock/clock';
import NotFound from './notfound/notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
      <Router>
        <div>
            <ul>
                  <li>
                        <Link to="/app">App</Link>
                  </li>
                  <li>
                        <Link to="/time">Time</Link>
                  </li>
                  <li>
                        <Link to="/clock">Clock</Link>
                  </li>
            </ul>
            <Switch>
                  <Route path="/app" component={App} />
                  <Route path="/time/:id" component={Time} />
                  <Route path="/time" component={Time} />
                  <Route path="/clock" component={Clock} />
                  <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    )

ReactDOM.render(
      routing, 
      document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
