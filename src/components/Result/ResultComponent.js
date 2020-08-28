import React from 'react';
import { Result, Button } from 'antd';
import { CheckSquareOutlined } from '@ant-design/icons';
import classes from './ResultComponent.module.less';

const ResultComponent = ({totalScore, initializeNewGame, makeFullEnd}) => {
    if (totalScore >= 0 && totalScore < 20) {
        return (
            <Result
                icon={<CheckSquareOutlined style={ {color: '#8cf8d0'}}/>}
                status="success"
                title={`Эксперимент завершен. Вы набрали ${totalScore} баллов из 30 возможных`}
                subTitle="Похоже, вы слишком часто пользовались амнезиаком. Согласны повторить эксперимент ещё раз?"
                extra={[
                    <Button danger type="primary" key="console" onClick={() => {initializeNewGame()}}>
            Согласен
                    </Button>,
                    <Button key="buy" onClick={() => {makeFullEnd()}}>Не согласен</Button>,
                ]}
            />
        );
    }

    if (totalScore >= 20 && totalScore < 30) {
        return (
            <Result
                icon={<CheckSquareOutlined style={ {color: '#8cf8d0'}}/>}
                status="success"
                title={`Эксперимент завершен. Вы набрали ${totalScore} баллов из 30 возможных`}
                subTitle="Вы согласны повторить эксперимент?"
                extra={[
                    <Button danger type="primary" key="console" onClick={() => {initializeNewGame()}}>
            Согласен
                    </Button>,
                    <Button key="buy" onClick={() => {makeFullEnd()}}>Не согласен</Button>,
                ]}
            />
        );
    }

    if (totalScore === 30) {
        return (
            <Result
                icon={<CheckSquareOutlined style={ {color: '#8cf8d0'}}/>}
                status="success"
                title={`Эксперимент завершен с результатом ${totalScore} баллов. Это максимально возможный результат.`}
                subTitle="Похоже, вы слишком много о нас знаете. Сотрудники Фонда уже выехали за вами. А пока - согласны повторить эксперимент?"
                extra={[
                    <Button danger type="primary" key="console" onClick={() => {initializeNewGame()}}>
            Согласен
                    </Button>,
                    <Button key="buy" onClick={() => {makeFullEnd()}}>Не согласен</Button>,
                ]}
            />
        );
    }


};

export default ResultComponent;