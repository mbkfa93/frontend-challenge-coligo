import {networkManager, HttpRequest} from "../../network/networkInterface";
import {CONSTANTS} from "../../../constants";
import {put, takeLatest} from 'redux-saga/effects'


/**
 * ACTION CREATORS
 */

const quizFetch = () => {
    return {type: CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_FETCH}
};
const quizRequested = () => {
    return {type: CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_REQUESTED}
};
const quizRequestedSucc = (quizzes: Array<object>) => {
    console.log('quiz requested succ,', quizzes);
    return {
        type: CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_REQUEST_SUCCEEDED,
        quizzes
    }
};

const quizRequestedErr = (error: string) => {
    return {
        type: CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_REQUEST_FAILED,
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
    yield takeLatest(CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_FETCH, getQuizzes);
}


export {quizSaga, quizFetch};