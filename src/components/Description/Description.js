import React, { useState } from 'react';
import { Card, Skeleton, Avatar, List} from 'antd';

import classes from '../Question/Question.module.less';
import Player from '../Player/Player';

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
                        avatar={<Avatar shape="square" className={classes.itemImage} src={shownItem.image} />}
                        title={shownItem.name}
                        description={<List>
                            <List.Item>Тип: {shownItem.type}</List.Item>
                            <List.Item>Уровень опасности: {shownItem.hazard}</List.Item>
                            <List.Item>Описание: {shownItem.description}</List.Item>
                        </List>}
                    />
                    <Player
                        playingItem={shownItem}
                    />
                </Skeleton>
            </Card>
        );
    }
};

export default Description;