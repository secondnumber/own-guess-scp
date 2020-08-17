import React from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import {setNextLevel, chooseHidden, countAttemptScore, countTotalScore} from '../../../redux/scpReducer';

const mapStateToProps = (state) => ({
    who: state.scp.who,
    scpList: state.scp.scpList,
    level: state.scp.level,
    attemptScore: state.scp.attemptScore,
    totalScore: state.scp.totalScore,
});

const AnswerContainer = connect(mapStateToProps, {setNextLevel, chooseHidden, countAttemptScore, countTotalScore})(Answer);

export default AnswerContainer;