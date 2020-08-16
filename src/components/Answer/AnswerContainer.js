import React from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';

const mapStateToProps = (state) => ({});

const AnswerContainer = connect(mapStateToProps)(Answer);

export default AnswerContainer;