import React from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';

const mapStateToProps = (state) => ({
    who: state.scp.who,
    scpList: state.scp.scpList,
    level: state.scp.level,
});

const AnswerContainer = connect(mapStateToProps)(Answer);

export default AnswerContainer;