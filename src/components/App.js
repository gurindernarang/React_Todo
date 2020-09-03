import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Library Used to display API errors using react-toastify module
import { ToastContainer } from "react-toastify";
//CSS used by react-toastify module
import "react-toastify/dist/ReactToastify.min.css";
import LandingView from "./landing-view/LandingView";
import CommonTodosList from "../components/common-list/CommonTodosList";
import "./App.css";

function App() {
  return (
    <MuiThemeProvider>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingView />
          </Route>
          <Route exact path="/pending">
            <CommonTodosList />
          </Route>
          <Route exact path="/completed">
            <CommonTodosList />
          </Route>
          <Route exact path="/deleted">
            <CommonTodosList />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
