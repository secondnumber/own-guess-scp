import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

const mapStateToProps = (state) => ({});

const QuestionContainer = connect(mapStateToProps)(Question);

export default QuestionContainer;