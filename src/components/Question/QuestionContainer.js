import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import {chooseHidden} from '../../../redux/scpReducer';

const mapStateToProps = (state) => ({
    who: state.scp.who,
    level: state.scp.level,
    scpList: state.scp.scpList
});

const QuestionContainer = connect(mapStateToProps, {chooseHidden})(Question);

export default QuestionContainer;