import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Box from "components/Box";

import "./App.css";
import "./fonts.css";

class App extends Component {
  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/list">
            <div>
              pxCode Screen List: <br />
              <Link to="/Box">Box 2</Link>
            </div>
          </Route>
          <Route exact path="/" component={Box} />

          <Route exact path="/Box" component={Box} />
        </Switch>
      </Router>
    );
  }
}

export default App;
