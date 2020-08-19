import React from 'react';

const Button = ({isDisabled, setNextLevel, level, isRoundEnd, makeGameEnd}) => {

    const goOverNextLevel = () => {
        setNextLevel(level);
        isRoundEnd(false);
    }

    const finishGame = () => {
        makeGameEnd(true);
    }

    if (level < 5) {
        return (
            <button disabled={isDisabled} onClick={goOverNextLevel}>
              Button
            </button>
        );
    }

    if (level === 5) {
        return (
            <button disabled={isDisabled} onClick={finishGame}>
              Button
            </button>
        );
    }
};

export default Button;