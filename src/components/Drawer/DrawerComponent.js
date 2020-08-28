import React, { useState } from 'react';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import classes from './DrawerComponent.module.less';

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

const DrawerComponent = ({show, handleOnClose, item}) => {
    return (
        <Drawer
            title={item.name}
            className={classes.wrapper}
            width='40vw'
            placement="left"
            maskClosable
            onClose={handleOnClose}
            visible={show}
        >
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Объект №" content={item.number} />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Класс объекта" content={item.type} />
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={24}>
                    <DescriptionItem title="Описание" content={item.fullDescription} />
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Особые условия содержания"
                        content={item.keeping}
                    />
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Источник"
                        content={
                            <a href="http://scpfoundation.net/scp-1246-ru">
                              http://scpfoundation.net/scp-1246-ru
                            </a>
                        }
                    />
                </Col>
            </Row>
        </Drawer>
    );
};

export default DrawerComponent;