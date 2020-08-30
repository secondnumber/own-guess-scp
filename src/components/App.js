import React from 'react';
import { Layout } from 'antd';
import classes from './App.module.less';
import HeaderContainer from './Header/HeaderContainer';
import QuestionContainer from './Question/QuestionContainer';
import AnswerContainer from './Answer/AnswerContainer';
import ResultContainer from './Result/ResultContainer';
import FullEnd from './FullEnd/FullEnd';

const { Content, Footer } = Layout;

const App = ({endGame, fullEnd, darkness, makeDarkness}) => {
    if (!endGame) {
        return (
            <Layout className="layout">
                <HeaderContainer/>
                <Content style={{ padding: '0 50px' }}>
                    <QuestionContainer/>
                    <AnswerContainer/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>SCP Foundation. Для внутреннего использования</Footer>
            </Layout>)
    }
    if (endGame && !fullEnd) {
        return (
            <Layout className="layout">
                <HeaderContainer/>
                <ResultContainer/>
            </Layout>
        )
    }

    if (endGame && fullEnd && !darkness) {
        return (
            <Layout className="layout">
                <HeaderContainer/>
                <FullEnd makeDarkness={makeDarkness}/>
            </Layout>
        )
    }

    if (endGame && fullEnd && darkness) {
        return (
            <div className={classes.wrapper} />
        )
    }
};

export default App;