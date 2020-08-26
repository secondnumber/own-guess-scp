import React, {useState, useEffect} from 'react';
import Item from './Item/Item';
import Description from '../Description/Description';
import ButtonComponent from '../Button/ButtonComponent';
import classes from './Answer.module.less'

const Answer = ({
    who,
    scpList,
    level,
    setNextLevel,
    chooseHidden,
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

    const itemsList = scpList[level].map((el) => {
        return (
            <Item
                key={el.id}
                id={el.id}
                name={el.name}
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
        )
    });
    
    return (
        <div className={classes.wrapper}>
            <ul className={classes.list}>
                {itemsList}
            </ul>
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