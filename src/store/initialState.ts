import {translationInitialState} from "../modules/localization/localizationWrapper";
import {quizInitialState} from "../modules/services/quiz/quizInitialState";

const initialStates = {...translationInitialState,...quizInitialState};

export {initialStates,translationInitialState};