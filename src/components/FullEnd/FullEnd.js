import React, { useEffect, useState } from 'react';
import { Statistic, Row, Col } from 'antd';
import classes from './FullEnd.module.less';

const { Countdown } = Statistic;

const FullEnd = () => {
    const date = Date.now() + 1000 + 1000 * 10;
    const [deadline, setDeadline] = useState(null);
    useEffect(() => {
        setDeadline(date);
    }, []);

    const onFinish = () => {
        console.log('finished!');
    };

    if (!deadline) {
        return (
            <div>Loading</div>
        )
    }

    if (deadline) {
        return (
            <Row gutter={24} justify='center' className={classes.wrapper}>
                <Col span={12}>
                    <Countdown className={classes.counter} title="Ваши воспоминания будут удалены через:" value={deadline} onFinish={() => {onFinish()}} />
                </Col>
            </Row>
        )
    }

};

export default FullEnd;