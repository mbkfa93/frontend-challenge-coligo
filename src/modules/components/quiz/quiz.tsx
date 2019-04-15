import {FormattedMessage} from "react-intl";
import React from "react";
import PropTypes from 'prop-types'

const Quiz = ({quiz}: { quiz: any }) => (
    <div className='quiz-box-container'>
        <p className='quiz-title'>{quiz.title}</p>
        <p className='quiz-data-item'>
            <span className='quiz-data-item__label'>
            <FormattedMessage id='quiz_component.course'/>                                        </span>
            <span className='quiz-data-item__value'>{quiz.course}</span>
        </p>

        <p className='quiz-data-item'>
            <span className='quiz-data-item__label'>
                <FormattedMessage id='quiz_component.topic'/>
            </span>
            <span className='quiz-data-item__value'>{quiz.topic}</span>
        </p>

        <p className='quiz-data-item'>
            <span className='quiz-data-item__label'>
                <FormattedMessage id='quiz_component.due_to'/>
            </span>
            <span className='quiz-data-item__value'>{quiz.dueDate}</span>
        </p>

        <button>
            <FormattedMessage
                id={quiz.type == 'quiz' ? 'quiz_component.start_quiz' : 'quiz_component.solve_assignment'}/>
        </button>

        <hr/>
    </div>
);
Quiz.propTypes = {
    quiz: PropTypes.any.isRequired
};
export default Quiz;