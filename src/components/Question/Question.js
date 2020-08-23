import React, {useEffect} from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import 'react-h5-audio-player/lib/styles.less';
import Player from '../Player/Player';
import CoverImage from '../../assets/images/guess.jpg';
import classes from './Question.module.less';

const { Meta } = Card;

const Question = ({who, level, chooseHidden, scpList, endRound}) => {

    useEffect(() => {
        chooseHidden();
    }, [level]);

    const hiddenItem = scpList[level][who];

    if (who === null && !endRound) {
        return (
            <div>
              Loading
            </div>
        );
    }
    if (who >= 0 && !endRound) {
        return (
            <Card
                style={{ width: '70vw', margin: '25px auto'}}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <Avatar className={classes.itemImage} src={CoverImage} />
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
            <Card
                style={{ width: '70vw', margin: '25px auto'}}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <Avatar className={classes.itemImage} src={CoverImage} />
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