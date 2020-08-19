import React from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import {setNextLevel, chooseHidden, countAttemptScore, countTotalScore, isRoundEnd, makeGameEnd} from '../../../redux/scpReducer';

const mapStateToProps = (state) => ({
    who: state.scp.who,
    scpList: state.scp.scpList,
    level: state.scp.level,
    attemptScore: state.scp.attemptScore,
    totalScore: state.scp.totalScore,
    endRound: state.scp.endRound,
    endGame: state.scp.endGame,
});

const AnswerContainer = connect(mapStateToProps,
    {setNextLevel, chooseHidden, countAttemptScore, countTotalScore, isRoundEnd, makeGameEnd})(Answer);

export default AnswerContainer;