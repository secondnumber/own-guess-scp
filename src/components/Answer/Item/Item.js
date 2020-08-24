import React, {useState, useEffect} from 'react';
import classes from './Item.module.less';
import CorrectSound from '../../../assets/correctSound.mp3';
import WrongSound from '../../../assets/wrongSound.mp3';
import { Skeleton } from 'antd';

const Item = ({
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

    const onClick = (id) => {
        if (!clicked) {
            setClicked(true);
            myFunc();
        }
        onItemClick(id);
    };

    const markAnswer = (id) => {
        if (!endRound) {
            if (who === id) {
                setHighlight('correct');
                setAttemptSound(CorrectSound);
            } else {
                setHighlight('wrong');
                setAttemptSound(WrongSound);
            }
        }
    };

    return (
        <li className={classes.item} onClick={() => {onClick(id); markAnswer(id)}}>
            <div className={classes.container}>
                <span className={`${classes.circle} ${highlight === null ? classes.empty : highlight === 'correct' ? classes.correct : classes.wrong}`}/>
                <span className={classes.name}>{name}</span>
                <audio src={attemptSound} autoPlay />
            </div>
        </li>
    );
};

export default Item;


