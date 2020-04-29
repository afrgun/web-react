// import { createStore, compose, applyMiddleware } from 'redux';
// import reducer from '../components/reducer';
// import thunk from 'redux-thunk';

// const configureStore = createStore(reducer);


// export default configureStore;

import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers';
import thunk from "redux-thunk";

const configureStore = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


export default configureStore;