import React, { Component } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  //   Redirect,
  Route,
  Switch,
} from "react-router-dom";
import store from "./store";
import fnp from "./Containers/fnp";
import "./App.css";

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={fnp} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
