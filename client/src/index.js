import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App';
import reducers from './reducers';

// reducers,action,applyMiddleware
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
	<Provider store = {store}><App /></Provider>
		, document.querySelector('#root'));