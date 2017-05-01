import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from "./Header";
import Home from "./Home";
import Forecast from "./Forecast";
import Detail from "./Detail";


class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="app-container col">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/detail/:city/:id" component={Detail} />
            <Route render={() =>  <p>Page not found T_T </p> } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
