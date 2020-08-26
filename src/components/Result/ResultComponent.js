import React from 'react';
import { Result, Button } from 'antd';
import classes from './ResultComponent.module.less';

const ResultComponent = ({totalScore}) => {

    if (totalScore >= 0 && totalScore < 30) {
        return (
            <Result
                status="success"
                title={`Эксперимент завершен. Вы набрали ${totalScore} баллов из 30 возможных`}
                subTitle="Вы согласны повторить эксперимент?"
                extra={[
                    <Button type="primary" key="console" danger>
            Согласен
                    </Button>,
                    <Button key="buy">Не согласен</Button>,
                ]}
            />
        );
    }

    if (totalScore === 30) {
        return (
            <Result
                status="success"
                title={`Эксперимент завершен с результатом ${totalScore} баллов. Это максимально возможный результат.`}
                subTitle="Похоже, вы слишком много знаете. Сотрудники Фонда уже выехали За вами. А пока - согласны повторить эксперимент?"
                extra={[
                    <Button type="primary" key="console" danger>
            Согласен
                    </Button>,
                    <Button key="buy">Не согласен</Button>,
                ]}
            />
        );
    }


};

export default ResultComponent;