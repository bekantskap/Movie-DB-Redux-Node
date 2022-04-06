import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import movieReducer from './reducers/movieReducer';
import { addMovie } from './actions/movieAction';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
  movieReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log('store uppdaterades'), store.getState());

// store.dispatch(addMovie());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default store;
