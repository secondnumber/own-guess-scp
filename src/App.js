import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import QuestionContainer from './components/Question/QuestionContainer';
import AnswerContainer from './components/Answer/AnswerContainer';
import ListAnt from './components/AntList';

const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <QuestionContainer/>
            <AnswerContainer/>
            <ListAnt/>
        </div>
    )
};

export default App;
