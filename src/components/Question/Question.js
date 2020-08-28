import React, {useEffect} from 'react';
import { Card, Avatar, Divider } from 'antd';
import 'react-h5-audio-player/lib/styles.less';
import Player from '../Player/Player';
import CoverImage from '../../assets/images/guess.jpg';
import classes from './Question.module.less';

const { Meta } = Card;

const Question = ({who, level, chooseHidden, scpList, endRound}) => {
    const random = Math.floor(Math.random() * 6);
    const hiddenItem = scpList[level][who];

    useEffect(() => {
        chooseHidden(random);
    }, [level]);

    if (who === null && !endRound) {
        return (
            <div className={classes.wrapper}>
              Loading
            </div>
        );
    }
    if (who >= 0 && !endRound) {
        console.clear();
        console.log(`Верный ответ: ${hiddenItem.name}`);
        return (
            <Card className={classes.wrapper}>
                <div className={classes.content}>
                    <Avatar shape="square" className={classes.image} src={CoverImage} />
                    <h2 className={classes.title}>[ДАННЫЕ УДАЛЕНЫ]</h2>
                    <Player playingItem={hiddenItem} autoPlay={false}/>
                </div>
            </Card>
        );
    }

    if (endRound) {
        return (
            <Card className={classes.wrapper}>
                <div className={classes.content}>
                    <Avatar shape="square" className={classes.image} src={hiddenItem.image} />
                    <h2 className={classes.title}>{hiddenItem.name}</h2>
                    <Player playingItem={hiddenItem} autoPlay={false}/>
                </div>
            </Card>
        );
    }

};

export default Question;