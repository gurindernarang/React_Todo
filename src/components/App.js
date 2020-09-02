import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingView from './landing-view/LandingView'
import './App.css';
//Library Used to display API errors using react-toastify module
import {ToastContainer} from "react-toastify";
//CSS used by react-toastify module
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <MuiThemeProvider>
      <ToastContainer autoClose={3000} hideProgressBar/>
      <LandingView></LandingView>
    </MuiThemeProvider>
  )
}

export default App;
