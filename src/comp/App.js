import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from "./Header";
import Home from "./Home";
import Forecast from "./Forecast";
import { Day } from "./Weather";


class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="app-container col">
          <Route component={Header}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/detail/:id" component={Day} />
            <Route render={() =>  <p>Page not found T_T </p> } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
