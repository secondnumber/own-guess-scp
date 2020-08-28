import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => ({
    endGame: state.scp.endGame,
    fullEnd: state.scp.fullEnd
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;