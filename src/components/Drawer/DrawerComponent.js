import React, { useEffect, useState } from 'react';
import { Drawer, Divider, Col, Row } from 'antd';

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

const DrawerComponent = ({show, handleOnClose, item}) => {
    const [viewportWidth, setViewportWidth] = useState(null);
    useEffect(() => {
        if(typeof(window.innerWidth)!=='undefined'){
            setViewportWidth(window.innerWidth);
        }
    });

    return (
        <Drawer
            title={item.name}
            width={viewportWidth > 900 ? '50vw' : '100vw'}
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
                            <a href={item.link}>
                                {item.link}
                            </a>
                        }
                    />
                </Col>
            </Row>
        </Drawer>
    );
};

export default DrawerComponent;