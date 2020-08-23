import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderContainer from './Header/HeaderContainer';
import QuestionContainer from './Question/QuestionContainer';
import AnswerContainer from './Answer/AnswerContainer';

const { Content, Footer } = Layout;

const App = ({endGame}) => {
    return (<Layout className="layout">
        <HeaderContainer/>
        <Content style={{ padding: '0 50px' }}>
            <QuestionContainer/>
            <AnswerContainer/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>)
}

export default App;


/* if (!endGame) {
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
}; */