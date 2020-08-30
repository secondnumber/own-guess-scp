import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { makeDarkness } from '../../redux/scpReducer';

const mapStateToProps = (state) => ({
    endGame: state.scp.endGame,
    fullEnd: state.scp.fullEnd,
    darkness: state.scp.darkness,
});

const AppContainer = connect(mapStateToProps, {makeDarkness})(App);

export default AppContainer;