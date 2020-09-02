import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//Redux libraries
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>,
  document.getElementById('root')
);