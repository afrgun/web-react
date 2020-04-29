import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import { createStore } from 'redux';
import reducer from './components/reducer';
import configureStore from './store/configureStore';
import { AppContainer } from 'react-hot-loader';

const store = configureStore;

ReactDOM.render(
  	<AppContainer>
		<Routes store={store}/>
	</AppContainer>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
