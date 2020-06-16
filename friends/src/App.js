import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import New from './components/New'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li><Link to='/new'>Create New Friend</Link></li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/new" component={New} />
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

