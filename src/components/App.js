import React from 'react';
import { Layout } from 'antd';
import HeaderContainer from './Header/HeaderContainer';
import QuestionContainer from './Question/QuestionContainer';
import AnswerContainer from './Answer/AnswerContainer';
import ResultContainer from './Result/ResultContainer';

const { Content, Footer } = Layout;

const App = ({endGame}) => {
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
    if (endGame) {
        return (
            <Layout className="layout">
                <HeaderContainer/>
                <ResultContainer/>
            </Layout>
        )
    }

}

export default App;