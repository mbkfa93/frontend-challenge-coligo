import React, {Component} from "react";
import {CONSTANTS} from "./constants";
import {FormattedMessage} from "react-intl";
import {store, sagaMiddleware} from "./store/store";
import rootSaga from "./sagas/rootSagaHandler";

import "./App.css";
import "./styles/css/style.css";
import {quizFetch} from "./modules/services/quiz/quizServices";

import {connect} from "react-redux";
import Quizzes from "./modules/components/quiz/quizzes";
import RequestStatus from "./utils/requestStatus";


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

const getAnnouncements = function () {
    store.dispatch(quizFetch());
};


class App extends Component {
    render() {
        return (
            <div className="app">
                <p><FormattedMessage id="hello"/></p>
                <Quizzes/>
                {/* <FormattedMessage id="side_menu__items.courses"/>
                <p>
                    <FormattedMessage id="side_menu__items.gradebook"/>
                </p>
                <p>
                    <FormattedMessage id="side_menu__items.announcements"/>
                </p>*/}
                <header className="app-header">
                    <p onClick={useEnglish}>use English</p>
                    <p onClick={useFrench}>use French </p>
                    <p onClick={getAnnouncements}> get quiz</p>

                    <p>{RequestStatus(CONSTANTS.ACTIONS.SERVICES.ANNOUNCEMENT).FAILED}</p>

                    {/*<p onClick={this.props.quizFetch()}> get quiz connect</p>*/}

                    <p>{JSON.stringify(this.props)}</p>

                </header>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    ...state
});
const mapDispatchToProps = (dispatch: any) => ({
    quizFetch: () => dispatch(quizFetch())
    // setBgAction: (payload) => dispatch(setBgAction(payload)),
    // setColorAction: (payload) => dispatch(setColorAction(payload))
});
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
