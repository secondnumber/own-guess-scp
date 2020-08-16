import React from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import {setNextLevel, chooseHidden} from '../../../redux/scpReducer';

const mapStateToProps = (state) => ({
    who: state.scp.who,
    scpList: state.scp.scpList,
    level: state.scp.level,
});

const AnswerContainer = connect(mapStateToProps, {setNextLevel, chooseHidden})(Answer);

export default AnswerContainer;