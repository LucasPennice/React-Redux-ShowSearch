import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
