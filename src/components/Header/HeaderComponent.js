import React from 'react';
import { Layout, Menu } from 'antd';
import classes from './Header.module.less';
import Logo from '../../assets/images/logo.png';

const { Header } = Layout;

const HeaderComponent = ({level, levelList, attemptScore, totalScore}) => {
    const headerList = levelList.map((el, index) => {
        return (
            <Menu.Item
                style={level === index
                    ? { backgroundColor: '#545454', color: '#FFFFFF', cursor: 'none' }
                    : { backgroundColor: '#1f1f1f', color: '#E3E3E3', cursor: 'none' } }
                key={`${index}${el}`}>{el}</Menu.Item>
        )
    });

    return (
        <div>
            <div className={classes.topBlock}>
                <div className={classes.logoBlock}>
                    <img className={classes.logoImage} src={Logo} alt="Logo"/>
                    <h1>Guess<span className={classes.logoTextHighlight}>SCP</span></h1>
                </div>
                <div className={classes.scoreBlock}>
                    <h3>Attempt score: {attemptScore} Total score: {totalScore}</h3>
                </div>
            </div>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    {headerList}
                </Menu>
            </Header>
        </div>
    );
};

export default HeaderComponent;