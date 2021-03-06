import {createStore, applyMiddleware} from "redux";
import {reducers} from "../reducers/reducers";
import createSAgaMiddleware from 'redux-saga';
import {initialStates} from "./initialState";

//Uncomment the next line on dev mode
// import {composeWithDevTools} from 'redux-devtools-extension';
//comment the next line on dev mode
const composeWithDevTools = (x: any) => eval(x);

const sagaMiddleware = createSAgaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    reducers,
    initialStates,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export {
    store,
    sagaMiddleware
}