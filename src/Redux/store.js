import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './Reducer/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga/index';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
