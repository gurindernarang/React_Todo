import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingView from './components/landing-view/LandingView'
import './App.css';
import {TodoProvider} from './store/TodoContext';
import {ToastContainer} from "react-toastify";
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
