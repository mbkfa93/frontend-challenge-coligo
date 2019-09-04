import {initialStates} from "../../store/initialState";
import {CONSTANTS} from "../../constants";
import {translationInitialState} from "./localizationWrapper";

const localizationReducer = (state = translationInitialState.languageConfig, action: any) => {
    console.log('initial states in localization reducers', state)
    switch (action.type) {
        case CONSTANTS.ACTIONS.TRANSLATION.UPDATE_LOCALIZATION_CONFIG:
            return {...action.payload};
            break;
        default:
            return state;
    }
};

export {localizationReducer}