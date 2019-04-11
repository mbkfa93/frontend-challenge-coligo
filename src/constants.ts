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
            QUIZ: 'quiz',
            ANNOUNCEMENT: 'announcement'
        }
    },
    URLS: {
        BASE_URL: "http://localhost/api/v1/",
        SERVICES: {
            QUIZ: '/quiz',
            ANNOUNCEMENT: '/announcement'
        }
    }
};

export {CONSTANTS};