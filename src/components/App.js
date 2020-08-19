import React from 'react';
import HeaderContainer from './Header/HeaderContainer';
import QuestionContainer from './Question/QuestionContainer';
import AnswerContainer from './Answer/AnswerContainer';

const App = ({endGame}) => {
    if (!endGame) {
        return (
            <div>
                <HeaderContainer/>
                <QuestionContainer/>
                <AnswerContainer/>
            </div>
        )
    }
    if (endGame) {
        return (
            <div>The end</div>
        )
    }
};

export default App;
