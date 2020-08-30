import React, {useState, useEffect} from 'react';
import { List } from 'antd';
import ItemComponent from './Item/ItemComponent';
import Description from '../Description/Description';
import ButtonComponent from '../Button/ButtonComponent';
import classes from './Answer.module.less'

const Answer = ({
    who,
    scpList,
    level,
    setNextLevel,
    attemptScore,
    totalScore,
    countAttemptScore,
    countTotalScore,
    isRoundEnd,
    endRound,
    endGame,
    makeGameEnd
}) => {
    const [shownId, setShownId] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const onItemClick = (id) => {
        setShownId(id);
    };

    const makeButtonActive = () => {
        setButtonDisabled(false);
    };

    useEffect(() => {
        setShownId(null); 
        setButtonDisabled(true);
    }, [level]);

    const data = scpList[level];

    return (
        <div className={classes.wrapper}>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={item =>
                    <ItemComponent
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        level={level}
                        attemptScore={attemptScore}
                        totalScore={totalScore}
                        countAttemptScore={countAttemptScore}
                        countTotalScore={countTotalScore}
                        who={who}
                        onItemClick={onItemClick}
                        makeButtonActive={makeButtonActive}
                        endRound={endRound}
                        isRoundEnd={isRoundEnd}
                    />
                }
            />
            <Description
                shownId={shownId}
                scpList={scpList}
                level={level}
                endRound={endRound}
            />
            <ButtonComponent
                isDisabled={buttonDisabled}
                setNextLevel={setNextLevel}
                level={level}
                isRoundEnd={isRoundEnd}
                endGame={endGame}
                makeGameEnd={makeGameEnd}
            />
        </div>
    );
};

export default Answer;