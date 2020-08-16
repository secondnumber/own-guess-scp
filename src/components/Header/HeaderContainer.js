import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
    level: state.scp.level,
    attemptScore: state.scp.attemptScore,
    totalScore: state.scp.totalScore,
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;