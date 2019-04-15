import {connect} from "react-redux";
import React from "react";
import {CONSTANTS} from "../../../constants";
import Quiz from "./quiz";
// import PropTypes from "prop-types";


const Quizzes = (payload: any) => {


    switch (payload.quizzes.status) {
        case CONSTANTS.STATUS.REQUEST.FETCHING:
            return (
                <div>
                    LOADING...
                </div>
            );
        case CONSTANTS.STATUS.REQUEST.SUCCEEDED:
            if (payload.quizzes && payload.quizzes.quizzes && payload.quizzes.quizzes.length) {
                return (
                    <div>
                        <ul>
                            {
                                payload.quizzes.quizzes.map((quiz: any) => (
                                    <Quiz key={quiz.id} quiz={quiz}/>
                                ))
                            }
                        </ul>
                    </div>)
            } else {
                return (

                    <div>
                        loading data...
                    </div>
                )
            }

        case CONSTANTS.STATUS.REQUEST.FAILED:
            return (
                <div>
                    ERROR in loading data...
                </div>
            );

        case CONSTANTS.STATUS.REQUEST.IDLE:
        default:
            return (
                <div>
                    Idle.......
                </div>
            )
    }
};

const mapStateToProps = (state: any) => ({
    ...state
});


// const mapDispatchToProps = dispatch => ({
//     rotateAction: (payload) => dispatch(rotateAction(payload))
// });

export default connect(mapStateToProps)(Quizzes);