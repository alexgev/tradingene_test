import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import Table from './components/table';

const store = createStore(allReducers);


ReactDOM.render(
	<Provider store={store}>
		<Table />
	</Provider>,
	document.getElementById('fieldToShow')
);