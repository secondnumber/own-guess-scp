import React from 'react';
import classes from './Header.module.less';
import Logo from '../../assets/images/logo.png';

const HeaderComponent = ({level, levelList, totalScore}) => {
    const headerList = levelList.map((el, index) => {
        return (
            <li className={`${classes.item} ${level === index ? classes.itemActive : ''}`} key={`${index}${el}`}>{el}</li>
        )
    });

    return (
        <div>
            <div className={classes.topBlock}>
                <div className={classes.logoBlock}>
                    <img className={classes.logoImage} src={Logo} alt="Logo"/>
                    <h1 className={classes.logoText}>Guess<span className={classes.logoTextHighlight}>SCP</span></h1>
                </div>
                <div className={classes.scoreBlock}>
                    <h3>Баллы: {totalScore}</h3>
                </div>
            </div>
            <nav className={classes.navigation}>
                <ul className={classes.list}>
                    {headerList}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderComponent;