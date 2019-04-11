/**
 * @author Meena
 * @description Contains the root saga, and imports for other root rootSagaHandler
 * based on answer in this link
 *
 * https://github.com/redux-saga/redux-saga/issues/760#issuecomment-273737022
 * the last approach was used
 *
 */
import {call, takeLatest} from 'redux-saga/effects'

import saga_Localization from '../modules/localization/localizationSaga';
import {HttpRequest, networkManager} from "../modules/network/networkInterface";
import {CONSTANTS} from "../constants";


import {makeSagasRestartable, yieldCombinedSagas} from "./sagaHelper";


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


function callGetAnnouncement(payload: object) {
    console.log('payload in callgetannounc', payload);
    return networkManager.sendRequest(new HttpRequest(
        CONSTANTS.URLS.SERVICES.ANNOUNCEMENT, {
            headers: {
                'hdsdf': "some header val"
            },
            method: HttpRequest.requestMethod.POST,
            body: payload
        }))
}

function* testingSaga1(data: object) {
    try {
        yield console.log('data in testing1', data)


    } catch (e) {
        console.log("Error in call getannouncements eee ", e)

    }

}


function* testingSaga(action: any) {
    try {
        let {data} = yield call(callGetAnnouncement, action.payload);
        yield call(testingSaga1, (data));

    } catch (e) {
        console.log("Error in call getannouncements", e)

    }

}


function* rootSagaTest() {
    yield takeLatest(CONSTANTS.ACTIONS.SERVICES.ANNOUNCEMENT, testingSaga);
    yield takeLatest('crap', testingSaga1);
}


/**
 * @description Contains a list of the root combinedSagas, for each component
 * The list is for watcher sagas, the worker sagas each will be in its own module
 * @type {Function[]}
 */
const rootSagas = [
    // rootSagaIncrement,
    // rootSagaDecrement,
    rootSagaTest,
    saga_Localization
];


/**
 * @description To returned the combined sagas for the whole app
 * @return {IterableIterator<any>}
 */
export default function* rootSaga() {
    yield  yieldCombinedSagas(rootSagas.map(makeSagasRestartable))
};