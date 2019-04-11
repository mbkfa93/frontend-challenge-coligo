import {intlReducer} from 'react-intl-redux'
import {CONSTANTS} from "../../constants";
import {flattenMessages} from './localizationHelper';
import {addLocaleData} from 'react-intl'

/**
 * For adding a new language, Modify only in the following code block
 */
/******************************************************************************/
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr';
import ar from 'react-intl/locale-data/ar';

addLocaleData([...en, ...ar, ...fr,]);
/******************************************************************************/


/**
 * Not added as a part of the saga, as it's required to be used in the initialization of the store
 * @param locale
 * @return {{locale: string}}
 */
const getMessagesForLocale = (locale = CONSTANTS.TRANSLATION_CONFIG.DEFAULT_LANG) => {
    let result: any = {locale};
    result.locale = locale;
    try {
        result.messages = require('./' + CONSTANTS.TRANSLATION_CONFIG.TRANSLATIONS_FILE_PATH_PREFIX + locale.toLowerCase());
    } catch (e) {
        result.messages = require('./' + CONSTANTS.TRANSLATION_CONFIG.TRANSLATIONS_FILE_PATH_PREFIX + CONSTANTS.TRANSLATION_CONFIG.DEFAULT_LANG);
        result.locale = CONSTANTS.TRANSLATION_CONFIG.DEFAULT_LANG;
    }
    result.messages = flattenMessages(result.messages);
    return result;
};


const initialState = {
    intl: {
        locale: CONSTANTS.TRANSLATION_CONFIG.DEFAULT_LANG.toLowerCase(),
        messages: getMessagesForLocale().messages
    },
};

export {
    intlReducer as translationReducer,
    initialState as translationInitialState,
    getMessagesForLocale
};