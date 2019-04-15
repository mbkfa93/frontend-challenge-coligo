import {takeLatest} from 'redux-saga/effects'
import {yieldCombinedSagas} from "../../../sagas/sagaHelper";
import {CONSTANTS} from "../../../constants";


function* callAnnouncementsService(action: any) {
    if (action && action.payload && action.payload.locale) {
        yield console;
        // const {locale, messages} = getMessagesForLocale(action.payload.locale);
        // yield put(updateIntl({locale, messages}));
    }
}


function* announcementService() {
    yield takeLatest(CONSTANTS.ACTIONS.SERVICES.ANNOUNCEMENT, callAnnouncementsService);

}

export default function* saga_Localization() {
    yield yieldCombinedSagas([
        announcementService
    ]);
};
