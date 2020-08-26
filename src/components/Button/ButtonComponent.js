import React from 'react';
import { Button } from 'antd';
import classes from './ButtonComponent.module.less';

const ButtonComponent = ({isDisabled, setNextLevel, level, isRoundEnd, makeGameEnd}) => {

    const goOverNextLevel = (level) => {
        setNextLevel(level);
        isRoundEnd(false);
        console.clear();
    }

    const finishGame = () => {
        makeGameEnd(true);
        setNextLevel(level);
    }

    if (level < 5) {
        return (
            <Button className={classes.button} danger type="primary" block disabled={isDisabled} onClick={() => {goOverNextLevel(level)}}>
                Повысить уровень допуска
            </Button>
        );
    }

    if (level === 5) {
        return (
            <Button className={classes.button} danger type="primary" block disabled={isDisabled} onClick={() => {finishGame()}}>
              Перейти к результатам эксперимента
            </Button>
        );
    }
};

export default ButtonComponent;