const CONSTANTS = {
    TRANSLATION_CONFIG: {
        DEFAULT_LANG: 'en',
        TRANSLATIONS_FILE_PATH_PREFIX: 'locales/'
    },
    ACTIONS: {
        TRANSLATION: {
            LOAD_LANGUAGE: "LOAD_LANGUAGE"
        },
        SERVICES: {
            QUIZ:{
                QUIZ_FETCH:"QUIZ_FETCH",
                QUIZ_REQUESTED:"QUIZ_REQUESTED",
                QUIZ_REQUEST_SUCCEEDED:"QUIZ_REQUEST_SUCCEEDED",
                QUIZ_REQUEST_FAILED:"QUIZ_REQUEST_FAILED",
            } ,
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