import {networkManager, HttpRequest} from "../../network/networkInterface";
import {CONSTANTS} from "../../../constants";
import {put, takeLatest} from 'redux-saga/effects'
import RequestStatus from "../../../utils/requestStatus";


/**
 * ACTION CREATORS
 */
const quizState = RequestStatus(CONSTANTS.ACTIONS.SERVICES.QUIZ);

const quizFetch = () => {
    return {type: quizState.FETCH}
};
const quizRequested = () => {
    return {type: quizState.REQUESTED}
};
const quizRequestedSucc = (quizzes: Array<object>) => {
    console.log('quiz requested succ,', quizzes);
    return {
        type: quizState.SUCCEEDED,
        quizzes
    }
};

const quizRequestedErr = (error: string) => {
    return {
        type: quizState.FAILED,
        error
    }
};


/**
 * @description quiz service worker function
 * @param action
 */
function* getQuizzes(action: object) {
    try {
        yield put(quizRequested());
        const {data: {quizzes: {quizzesData}}} = yield networkManager.sendRequest(new HttpRequest(CONSTANTS.URLS.SERVICES.QUIZ));
        yield put(quizRequestedSucc(quizzesData));
    } catch (e) {
        yield put(quizRequestedErr(e));
    }
}

/**
 * @description quizzes function watcher
 */
function* quizSaga() {
    yield takeLatest(quizState.FETCH, getQuizzes);
}


export {quizSaga, quizFetch};