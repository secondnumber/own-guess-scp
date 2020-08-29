import React, { useState } from 'react';
import { Card, Avatar, List, Button } from 'antd';
import classes from './Description.module.less';
import Player from '../Player/Player';
import DrawerComponent from '../Drawer/DrawerComponent';

const Description = ({shownId, scpList, level}) => {
    const [showDrawer, setShowDrawer] = useState(false);
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
            <>
                <Card className={classes.block}>
                    <h2 className={classes.header}>{shownItem.name}</h2>
                    <div className={classes.shortInfo}>
                        <Avatar shape="square" className={classes.itemImage} src={shownItem.image} />
                        <List className={classes.list}>
                            <List.Item>Класс содержания: {shownItem.type}</List.Item>
                            <List.Item>Уровень опасности: {shownItem.hazard}</List.Item>
                            <List.Item><Button className={classes.button} type="dashed" danger onClick={() => setShowDrawer(true)}>Полный доступ</Button></List.Item>
                        </List>
                    </div>
                    <div className={classes.description}>
                        {shownItem.description}
                    </div>
                    <Player
                        playingItem={shownItem}
                    />
                </Card>
                <DrawerComponent
                    show={showDrawer}
                    handleOnClose={() => setShowDrawer(false)}
                    item={shownItem}/>
            </>
        );
    }
};

export default Description;