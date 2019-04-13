import {CONSTANTS} from "../../../constants";
import {initialStates} from "../../../store/initialState";


const quizReducer= (state = initialStates, action: any) => {
    switch (action.type) {
        case CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_FETCH:
            return{
                ...state,
            };
        case CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_REQUESTED:
            return state;
        case CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_REQUEST_SUCCEEDED:
            console.log('succeeded,',action);
            return{
                ...state,
                quizzes:action.quizzes
            };
        case CONSTANTS.ACTIONS.SERVICES.QUIZ.QUIZ_REQUEST_FAILED:
            return state;
        default:
            return state;
    }
};

export { quizReducer}