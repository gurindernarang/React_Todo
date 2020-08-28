import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingView from './components/landing-view/LandingView'
import './App.css';
//React context use to separate out data
import {TodoProvider} from './store/TodoContext';
//Used to display API errors
import {ToastContainer} from "react-toastify";
//CSS used by Toastify module
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <TodoProvider>
      <MuiThemeProvider>
        <ToastContainer autoClose={3000} hideProgressBar/>
        <LandingView></LandingView>
      </MuiThemeProvider>
    </TodoProvider>
  )
}

export default App;
