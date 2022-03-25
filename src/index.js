import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './Features/User';
import PostReducer from './Features/TweetPost';

const store = configureStore({
  reducer:{
    user: userReducer,
    post: PostReducer,
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
