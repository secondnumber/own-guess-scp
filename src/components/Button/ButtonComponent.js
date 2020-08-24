import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({isDisabled, setNextLevel, level, isRoundEnd, makeGameEnd}) => {

    const goOverNextLevel = (level) => {
        setNextLevel(level);
        isRoundEnd(false);
    }

    const finishGame = () => {
        makeGameEnd(true);
    }

    if (level < 5) {
        return (
            <Button danger type="primary" block disabled={isDisabled} onClick={() => {goOverNextLevel(level)}}>
                Next Level
            </Button>
        );
    }

    if (level === 5) {
        return (
            <Button danger type="primary" block disabled={isDisabled} onClick={() => {finishGame()}}>
              Finish game
            </Button>
        );
    }
};

export default ButtonComponent;