import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingView from './components/landing-view/LandingView'
import './App.css';

function App() {
  return (
      <MuiThemeProvider>
        <LandingView></LandingView>
      </MuiThemeProvider>
  );
}

export default App;
