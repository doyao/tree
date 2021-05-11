//App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Switch,Link } from "react-router-dom";
import FrontendAuth from "./component/FrontendAuth";
import {routerMap} from "./utils/routerMap";
import {customConfirm } from './utils/Prompt'
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router getUserConfirmation={customConfirm }>
          <Link to='/'>States</Link>
          <Link to='/Tree'>Tree</Link>
          <Link to='/UseReducer'>UseReducer</Link>
          <Switch>
            <FrontendAuth routerConfig={routerMap} />
          </Switch>
      </Router>
    );
  }
}
 
export default App;