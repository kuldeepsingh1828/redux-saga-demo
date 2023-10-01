import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/todoReducer";
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare = createSagaMiddleware()
const middleWares = [sagaMiddleWare]

const store = createStore(reducer, applyMiddleware(...middleWares));

sagaMiddleWare.run(rootSaga);

export default store;