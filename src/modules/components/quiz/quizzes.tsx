import {connect} from "react-redux";
import React from "react";


const Quizzes = (payload: any) => {

    if (payload.quizzes && payload.quizzes.quizzes && payload.quizzes.quizzes.length) {
        return (<div>
            <p>quizzes go here</p>
            {/*<p>{JSON.stringify(payload.quizzes.quizzes)}</p>*/}

            <ul>
                {payload.quizzes.quizzes.map((quiz: any) => (
                    <p key={quiz.id}>
                        {/*{JSON.stringify(quiz)}*/}
                        {quiz.course} : {quiz.topic}
                    </p>
                ))}
            </ul>
        </div>)
    } else {
        return (

            <div>
                loading data...
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