import React from 'react';

const Button = ({isDisabled, setNextLevel, level, chooseHidden}) => {

    const goOverNextLevel = () => {
        setNextLevel(level);
        chooseHidden();
    }
    return (
        <button disabled={isDisabled} onClick={goOverNextLevel}>
        Button
        </button>
    );
};

export default Button;