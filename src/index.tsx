import React, {Component} from 'react';
import {Provider} from 'react-intl-redux'
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// @ts-ignore
import DirectionProvider from "react-with-direction/dist/DirectionProvider";

import {store} from "./store/store";
import {connect} from "react-redux";

class MainAppProviders extends Component<any> {
    render() {
        return (
            <DirectionProvider direction={this.props.localizationReducer.textDirection}>
                <App/>
            </DirectionProvider>
        );
    }
};
const MainAppComponent = connect((state: any) => ({
    ...state
}), (dispatch: any) => {
    return {}
})(MainAppProviders);

ReactDOM.render(
    <Provider store={store}>
            <MainAppComponent/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
