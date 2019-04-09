import {createStore, applyMiddleware} from "redux";
import {reducers} from "../reducers/reducers";
import createSAgaMiddleware from 'redux-saga';

import {translationInitialState} from "../modules/localization/localizationWrapper";
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSAgaMiddleware();

const middlewares = [sagaMiddleware];

const initialStates = {...translationInitialState};
const store = createStore(
    reducers,
    initialStates,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export {
    store,
    sagaMiddleware
}