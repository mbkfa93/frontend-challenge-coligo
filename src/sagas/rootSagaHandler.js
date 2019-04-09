/**
 * @author Meena
 * @description Contains the root saga, and imports for other root rootSagaHandler
 * based on answer in this link
 *
 * https://github.com/redux-saga/redux-saga/issues/760#issuecomment-273737022
 * the last approach was used
 *
 */
import {call, put, takeLatest, delay, spawn} from 'redux-saga/effects'

import saga_Localization from '../modules/localization/localizationSaga';


/*
//These are kept for now as ar eference
export function* helloSaga() {
    console.log('Hello Sagas!');
    yield takeLatest("INCREMENT", incrementAsync);
}


export function* incrementAsync() {
    console.error("before yield put");
    yield delay(1000, 'test');
    console.error("After yield put");
}


function* increment() {
    yield put({type: 'INCREMENT'})
    console.error("After yield put");
}

function* rootSagaIncrement() {
    yield takeLatest("INCREMENT_ASYNC", incrementAsync);
    yield takeLatest("INCREMENT", increment);
};


function* deccrementAsync() {
    console.error("before yield dec");
    yield delay(1000, 'test');
    console.error("After yield dec");
}


function* rootSagaDecrement() {
    yield takeLatest("DECREMENT_ASYNC", deccrementAsync);
    yield takeLatest("INCREMENT", increment);
};

*/

/**
 * @description To handle restarting of a saga, in case it failed.
 * @param saga
 * @returns {Function}
 */
const makeRestartable = (saga) => {
    return function* () {
        yield spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    console.error("unexpected root saga termination. The root rootSagaHandler are supposed to be rootSagaHandler that live during the whole app lifetime!", saga);
                } catch (e) {
                    console.error("Saga error, the saga will be restarted", e);
                }
                yield delay(1000);
            }
        })
    };
};

/**
 * @description Contains a list of the root rootSagaHandler, for each component
 * The list is for watcher sagas, the worker sagas each will be in its own module
 * @type {Function[]}
 */
const rootSagaHandler = [
    // rootSagaIncrement,
    // rootSagaDecrement,
    saga_Localization
].map(makeRestartable);


export default function* rootSaga() {
    yield* rootSagaHandler.map(function* (saga) {
        yield  saga();
    });
};