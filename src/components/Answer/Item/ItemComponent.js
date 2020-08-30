import React, {useState, useEffect} from 'react';
import { List } from 'antd';
import classes from './Item.module.less';

const ItemComponent = ({
    level,
    who,
    id,
    name,
    onItemClick,
    makeButtonActive,
    attemptScore,
    totalScore,
    countAttemptScore,
    countTotalScore,
    endRound,
    isRoundEnd
}) => {
    const [clicked, setClicked] = useState(null);
    const [highlight, setHighlight] = useState(null);
    const [attemptSound, setAttemptSound] = useState(null);

    useEffect(() => {
        setClicked(false);
    }, [level]);

    useEffect(() => {
        setHighlight(null);
    }, [level]);

    const myFunc = () => {
        if (who === id) {
            makeButtonActive();
            countTotalScore(attemptScore, totalScore);
            countAttemptScore(0);
            isRoundEnd(true);
        } else if (!endRound) {
            countAttemptScore(attemptScore + 1);
        }
    };

    const onClick = (item) => {
        if (!clicked) {
            setClicked(true);
            myFunc();
        }
        onItemClick(item);
    };

    const markAnswer = (item) => {
        if (!endRound) {
            if (who === item) {
                setHighlight('correct');
                setAttemptSound('https://res.cloudinary.com/dv4fxot90/video/upload/v1598607446/sounds/correctSound_ifuhmz.mp3');
            } else {
                setHighlight('wrong');
                setAttemptSound('https://res.cloudinary.com/dv4fxot90/video/upload/v1598607446/sounds/wrongSound_yod1fp.mp3');
            }
        }
    };

    return (
        <List.Item className={classes.item} onClick={() => {onClick(id); markAnswer(id)}}>
            <div className={classes.container}>
                <span className={`${classes.circle} ${highlight === null ? classes.empty : highlight === 'correct' ? classes.correct : classes.wrong}`}/>
                <span className={classes.name}>{name}</span>
                <audio src={attemptSound} autoPlay />
            </div>
        </List.Item>
    );
};

export default ItemComponent;


