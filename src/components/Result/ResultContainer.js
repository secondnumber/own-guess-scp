import React from 'react';
import { connect } from 'react-redux';
import ResultComponent from './ResultComponent';
import { initializeNewGame, makeFullEnd } from '../../../redux/scpReducer';

const mapStateToProps = (state) => ({
    totalScore: state.scp.totalScore,
});

const ResultContainer = connect(mapStateToProps, {initializeNewGame, makeFullEnd})(ResultComponent);

export default ResultContainer;