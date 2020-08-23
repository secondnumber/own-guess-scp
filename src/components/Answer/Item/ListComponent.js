import React, {useState, useEffect} from 'react';
import { List, Typography, Divider } from 'antd';

const ListComponent = ({
    scpList,
    level,
    who,
    onItemClick,
    makeButtonActive,
    attemptScore,
    totalScore,
    countAttemptScore,
    countTotalScore,
    endRound,
    isRoundEnd
}) => {
    const data = scpList[level];
    const [clicked, setClicked] = useState(null);

    useEffect(() => {
        setClicked(false);
    }, [level]);

    const myFunc = (id) => {
        if (who === id) {
            console.log('hey');
            makeButtonActive();
            countTotalScore(attemptScore, totalScore);
            countAttemptScore(0);
            isRoundEnd(true);
        } else {
            if (!endRound) {
                countAttemptScore(attemptScore + 1);
                console.log('wrong')
            }
        }
    };

    const onClick = (id) => {
        if (!clicked) {
            setClicked(true);
            myFunc(id);
        }
        onItemClick(id);
    };

    return (
        <List
            style={{ flexBasis: '50%', marginRight: 15 }}
            bordered
            dataSource={data}
            renderItem={item => (
                <List.Item key={item.id} onClick={() => {onClick(item.id)}}>
                    {item.name}
                </List.Item>
            )}
        />
    );
};

export default ListComponent;


/*
import React, {useState, useEffect} from 'react';
import { List, Typography, Divider } from 'antd';

const Item = ({
    level,
    who,
    id,
    name,
    onItemClick,
    makeButtonActive,
    attemptScore,
    totalScore,
    countAttemptScore,
    countTotalScore,
    endRound,
    isRoundEnd
}) => {
    const [clicked, setClicked] = useState(null);

    useEffect(() => {
        setClicked(false);
    }, [level]);

    const myFunc = () => {
        if (who === id) {
            console.log('hey');
            makeButtonActive();
            countTotalScore(attemptScore, totalScore);
            countAttemptScore(0);
            isRoundEnd(true);
        } else {
            if (!endRound) {
                countAttemptScore(attemptScore + 1);
                console.log('wrong')
            }
        }
    };

    const onClick = (id) => {
        if (!clicked) {
            setClicked(true);
            myFunc();
        }
        onItemClick(id);
    };

    return (
        <li onClick={() => {onClick(id)}}>
            {id} {name} {who}
        </li>
    );
};

export default Item;
 */