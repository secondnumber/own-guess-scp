import React from 'react';

const Button = ({isDisabled, setNextLevel, level, chooseHidden}) => {

    const goOverNextLevel = () => {
        setNextLevel(level);
    }
    return (
        <button disabled={isDisabled} onClick={goOverNextLevel}>
        Button
        </button>
    );
};

export default Button;