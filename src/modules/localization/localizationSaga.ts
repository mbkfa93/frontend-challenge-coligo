import {put, takeLatest} from 'redux-saga/effects'
import {updateIntl} from 'react-intl-redux'
import {getMessagesForLocale} from './localizationWrapper'
import {CONSTANTS} from "../../constants";
import {yieldCombinedSagas} from "../../sagas/sagaHelper";

function* loadLanguage(action: any) {
    if (action && action.payload && action.payload.locale) {
        const {locale, messages} = getMessagesForLocale(action.payload.locale);
        yield put(updateIntl({locale, messages}));
    }
}

function* loadLanguageSaga() {
    yield takeLatest(CONSTANTS.ACTIONS.TRANSLATION.LOAD_LANGUAGE, loadLanguage);

}

export default function* saga_Localization() {
    yield yieldCombinedSagas([
        loadLanguageSaga
    ]);
};


