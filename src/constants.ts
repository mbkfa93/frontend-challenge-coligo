const CONSTANTS = {
    TRANSLATION_CONFIG: {
        DEFAULT_LANG: 'en',
        TRANSLATIONS_FILE_PATH_PREFIX: 'locales/'
    },
    STATUS: {
        REQUEST: {
            IDLE: "IDLE",
            FETCHING: 'FETCHING',
            SUCCEEDED: 'SUCCEEDED',
            FAILED: 'FAILED'
        }
    },
    ACTIONS: {
        TRANSLATION: {
            LOAD_LANGUAGE: "LOAD_LANGUAGE",
            UPDATE_LOCALIZATION_CONFIG:"UPDATE_LOCALIZATION_CONFIG"
        },
        SERVICES: {
            QUIZ: "QUIZ",
            ANNOUNCEMENT: 'announcement'
        }
    },
    URLS: {
        BASE_URL: "https://raw.githubusercontent.com/mbkfa93/coligo-mock/master/api/v1/",
        SERVICES: {
            QUIZ: '/quiz',
            ANNOUNCEMENT: '/announcement'
        }
    }
};

export {CONSTANTS};