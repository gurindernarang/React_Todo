import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingView from './components/landing-view/LandingView'
import './App.css';
import {TodoProvider} from './store/TodoContext';

function App() {
  return (
    <TodoProvider>
      <MuiThemeProvider>
        <LandingView></LandingView>
      </MuiThemeProvider>
    </TodoProvider>
  );
}

export default App;
