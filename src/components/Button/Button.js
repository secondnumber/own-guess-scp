import React from 'react';

const Button = ({isDisabled, setNextLevel, level, chooseHidden, isRoundEnd}) => {

    const goOverNextLevel = () => {
        setNextLevel(level);
        isRoundEnd(false);
    }
    return (
        <button disabled={isDisabled} onClick={goOverNextLevel}>
        Button
        </button>
    );
};

export default Button;