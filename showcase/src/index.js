import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import BootstrapShowcase from './components/BootstrapShowcase';
import EvergreenNavigation from './components/EvergreenNavigation';

import * as serviceWorker from './serviceWorker';

const Main = (
  <Router>
    <>
      <EvergreenNavigation />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/bootstrap-showcase" component={BootstrapShowcase} />
      </Switch>
    </>
  </Router>
);

ReactDOM.render(Main, document.getElementById('root'));

serviceWorker.unregister();