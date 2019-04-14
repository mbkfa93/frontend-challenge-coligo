import {CONSTANTS} from "../../../constants";
import {initialStates} from "../../../store/initialState";
import RequestStatus from "../../../utils/requestStatus";


const quizReducer = (state = initialStates, action: any) => {
    const quizState = RequestStatus(CONSTANTS.ACTIONS.SERVICES.QUIZ);
    switch (action.type) {
        case  quizState.FETCH:
            return {
                ...state,
            };
        case quizState.REQUESTED:
            return state;
        case quizState.SUCCEEDED:
            console.log('succeeded,', action);
            return {
                ...state,
                quizzes: action.quizzes
            };
        case quizState.FAILED:
            return state;
        default:
            return state;
    }
};

export {quizReducer}