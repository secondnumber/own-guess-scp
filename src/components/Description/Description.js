import React from 'react';
import { Card, Skeleton, Avatar, List} from 'antd';
import Player from '../Player/Player';
import CorrectSound from '../../assets/correctSound.mp3';
import WrongSound from '../../assets/wrongSound.mp3';
import classes from '../Question/Question.module.less';

const { Meta } = Card;

const Description = ({shownId, scpList, level, endRound}) => {
    const shownItem = scpList[level][shownId];

    if (shownId === null) {
        return (
            <Card style={{ flexBasis: '50%', marginLeft: 15 }}>
              Послушайте звук и выберите существо
            </Card>
        );
    }

    if (shownId >=0 ) {
        return (
            <Card style={{ flexBasis: '50%', marginLeft: 15 }}>
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={<Avatar className={classes.itemImage} src={shownItem.image} />}
                        title={shownItem.name}
                        description={<List>
                            <List.Item>Тип: {shownItem.type}</List.Item>
                            <List.Item>Уровень опасности: {shownItem.hazard}</List.Item>
                            <List.Item>Описание: {shownItem.description}</List.Item>
                        </List>}
                    />
                    <Player playingItem={shownItem} autoPlay={false}/>
                    {!endRound ? <audio src={WrongSound} autoPlay /> : <audio src={CorrectSound} autoPlay />}
                </Skeleton>
            </Card>
        );
    }
};

export default Description;