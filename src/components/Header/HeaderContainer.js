import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';

const mapStateToProps = (state) => ({
    level: state.scp.level,
    levelList: state.scp.levelList,
    attemptScore: state.scp.attemptScore,
    totalScore: state.scp.totalScore,
});

const HeaderContainer = connect(mapStateToProps)(HeaderComponent);

export default HeaderContainer;