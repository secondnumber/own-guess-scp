import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;