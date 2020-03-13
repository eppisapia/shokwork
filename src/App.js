import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './component/NavigationBar';
import Home from './component/Home';
import Contact from './component/sections/Contact';
import NoMatch from './component/sections/NoMatch';
import About from './component/sections/About';


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
