import React from "react";
import ReactDOM from "react-dom";
import App from "./Modules/App/App.jsx";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Houses from "./Modules/Houses/houses";

function NoMatch() {
  return <Redirect to="/" />;
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/houses" exact component={Houses} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
