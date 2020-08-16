import React from 'react';

const Header = ({level, attemptScore, totalScore}) => {
    return (
        <div>
        Header level: {level} attempt: {attemptScore} total score: {totalScore}
        </div>
    );
};

export default Header;