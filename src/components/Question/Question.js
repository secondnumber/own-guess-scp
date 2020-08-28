import React, {useEffect} from 'react';
import { Skeleton, Card, Avatar } from 'antd';
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
            <div>
              Loading
            </div>
        );
    }
    if (who >= 0 && !endRound) {
        console.clear();
        console.log(`Верный ответ: ${hiddenItem.name}`);
        return (
            <Card className={classes.wrapper}>
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <Avatar shape="square" className={classes.itemImage} src={CoverImage} />
                        }
                        title="[ДАННЫЕ УДАЛЕНЫ]"
                        description={<Player playingItem={hiddenItem} autoPlay={false}/>}
                    />
                </Skeleton>
            </Card>
        );
    }

    if (endRound) {
        return (
            <Card className={classes.wrapper}>
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <Avatar shape="square" className={classes.itemImage} src={hiddenItem.image} />
                        }
                        title={hiddenItem.name}
                        description={<Player playingItem={hiddenItem} autoPlay={false}/>}
                    />
                </Skeleton>
            </Card>
        );
    }

};

export default Question;