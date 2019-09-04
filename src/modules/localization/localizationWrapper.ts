import {intlReducer} from 'react-intl-redux'
import {CONSTANTS} from "../../constants";
import {flattenMessages} from './localizationHelper';
import {addLocaleData} from 'react-intl'
import {localizationReducer} from "./localizationReducer";

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
    let translationFile: any;
    result.locale = locale;
    try {
        translationFile = require('./' + CONSTANTS.TRANSLATION_CONFIG.TRANSLATIONS_FILE_PATH_PREFIX + locale.toLowerCase());
    } catch (e) {
        translationFile = require('./' + CONSTANTS.TRANSLATION_CONFIG.TRANSLATIONS_FILE_PATH_PREFIX + CONSTANTS.TRANSLATION_CONFIG.DEFAULT_LANG);
        result.locale = CONSTANTS.TRANSLATION_CONFIG.DEFAULT_LANG;
    }
    result.languageConfig = translationFile.languageConfig;
    result.messages = flattenMessages(translationFile.strings);

    return result;
};


const initialState = {
    intl: {
        locale: CONSTANTS.TRANSLATION_CONFIG.DEFAULT_LANG.toLowerCase(),
        messages: getMessagesForLocale().messages,
    },
    languageConfig: getMessagesForLocale().languageConfig
};

export {
    intlReducer as translationReducer,
    localizationReducer,
    initialState as translationInitialState,
    getMessagesForLocale
};