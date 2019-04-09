import {combineReducers} from "redux";
import {translationReducer} from "../modules/localization/localizationWrapper";

const reducers = combineReducers({
    intl: translationReducer
});
export {reducers};