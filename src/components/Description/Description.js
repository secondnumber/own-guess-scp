import React from 'react';
import { Card, Skeleton, Avatar, List, Button } from 'antd';
import classes from './Description.module.less';
import Player from '../Player/Player';

const { Meta } = Card;

const Description = ({shownId, scpList, level}) => {
    const shownItem = scpList[level][shownId];

    if (shownId === null) {
        return (
            <Card className={classes.block}>
              Послушайте звук и выберите SCP
            </Card>
        );
    }

    if (shownId >=0 ) {
        return (
            <Card className={classes.block}>
                <h2 className={classes.header}>{shownItem.name}</h2>
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <div className={classes.imageBlock}>
                                <Avatar shape="square" className={classes.itemImage} src={shownItem.image} />
                                <Button type="dashed">Получить доступ</Button>
                            </div>
                        }
                        description={<List>
                            <List.Item>Класс содержания: {shownItem.type}</List.Item>
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