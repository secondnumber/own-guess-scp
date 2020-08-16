import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import QuestionContainer from "./components/Question/QuestionContainer";
import AnswerContainer from "./components/Answer/AnswerContainer";

const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <QuestionContainer/>
            <AnswerContainer/>
        </div>
    )
};

export default App;
