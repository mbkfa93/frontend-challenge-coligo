import {call, put, takeEvery, takeLatest, delay,} from 'redux-saga/effects'
import {updateIntl} from 'react-intl-redux'
import {getMessagesForLocale} from './localizationWrapper'
import {CONSTANTS} from "../../constants";

function* loadLanguage(action) {
    if (action && action.payload && action.payload.locale) {
        const {locale, messages} = getMessagesForLocale(action.payload.locale);
        yield put(updateIntl({locale, messages}));
    }
}

export default function* saga_Localization() {
    yield takeLatest(CONSTANTS.ACTIONS.TRANSLATION.LOAD_LANGUAGE, loadLanguage);
    /**
     * Other options to add later may include saving the user language across browser
     */
};

