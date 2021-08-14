import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = { count: 0, step: 1 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count : state.count + state.step};
    case 'decrement':
      return {...state, count : state.count - state.step};
    case 'setStep':
      return {...state, step: action.value };
    default: 
      return state;
  }  
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
