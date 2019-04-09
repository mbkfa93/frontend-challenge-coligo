import React, {Component} from "react";
import {CONSTANTS} from "./constants";
import {FormattedMessage} from "react-intl";
import {store, sagaMiddleware} from "./store/store";
import rootSaga from "./sagas/rootSagaHandler";

import "./App.css";
import "./styles/css/style.css";


sagaMiddleware.run(rootSaga);


const useEnglish = function () {
    store.dispatch({
        type: CONSTANTS.ACTIONS.TRANSLATION.LOAD_LANGUAGE,
        payload: {
            locale: 'en'
        }
    })
};

const useFrench = function () {
    store.dispatch({
        type: CONSTANTS.ACTIONS.TRANSLATION.LOAD_LANGUAGE,
        payload: {
            locale: 'fr'
        }
    })
};


class App extends Component {
    render() {
        return (
            <div className="app">
                <p><FormattedMessage id="hello"/></p>

                <FormattedMessage id="side_menu__items.courses"/>
                <p>
                    <FormattedMessage id="side_menu__items.gradebook"/>
                </p>
                <p>
                    <FormattedMessage id="side_menu__items.announcements"/>
                </p>
                <header className="app-header">
                    <p onClick={useEnglish}>use English</p>
                    <p onClick={useFrench}>use French </p>


                    <a className="App-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
