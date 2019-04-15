import {CONSTANTS} from "../../../constants";
import {initialStates} from "../../../store/initialState";
import RequestStatus from "../../../utils/requestStatus";


const quizReducer = (state = initialStates, action: any) => {
    const quizState = RequestStatus(CONSTANTS.ACTIONS.SERVICES.QUIZ);
    switch (action.type) {
        case  quizState.FETCH:
        case quizState.REQUESTED:
            return {
                ...state,
                status: CONSTANTS.STATUS.REQUEST.FETCHING
            };
        case quizState.SUCCEEDED:
            console.log('succeeded,', action);
            return {
                ...state,
                quizzes: action.quizzes,
                status: CONSTANTS.STATUS.REQUEST.SUCCEEDED
            };
        case quizState.FAILED:
            return {
                ...state,
                status: CONSTANTS.STATUS.REQUEST.FAILED
            };
        default:
            return {
                ...state
            };
    }
};

export {quizReducer}