import React from 'react';
import { connect } from 'react-redux';
import ResultComponent from './ResultComponent';

const mapStateToProps = (state) => ({
    totalScore: state.scp.totalScore,
});

const ResultContainer = connect(mapStateToProps)(ResultComponent);

export default ResultContainer;