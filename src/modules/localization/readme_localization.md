#Notes for adding new languages
In order to add new languages, you only need to do the following modifications

####localizationWrapper.js

* Add another import, for the reburied language to the following list

>import en from 'react-intl/locale-data/en.js';\
>import fr from 'react-intl/locale-data/fr.js';\
>import ar from 'react-intl/locale-data/ar.js';

* Add the language code to the following list

>addLocaleData([...en, ...ar,...fr, ]);

* Create a copy of the en.json file in **src/modules/localization/locales** with the locale name
of the requested translation language, and modify it with the required translations.