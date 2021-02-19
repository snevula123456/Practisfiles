import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware , compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/Store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Middleware 
const logger = store => {
     return next => {
       return action => {
          console.log("[Middleware Dispatching] " , action);
          const result  = next(action);
          console.log('[Middleware] next state ', store.getState());
          return result;
       }   
     }
}
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
<Provider store={store}><App /></Provider>,document.getElementById('root'));

