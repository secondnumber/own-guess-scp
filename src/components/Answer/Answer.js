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
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    const [shownId, setShownId] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(null);

    const onItemClick = (id) => {
        setShownId(id);
    };

    const makeButtonActive = () => {
        setButtonDisabled(false);
    };

    useEffect(() => {
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
    } )
    return (
        <div className={classes.wrapper}>
            <div className={classes.contentBlock}>
                <ul className={classes.list}>
                    {itemsList}
                </ul>
                <Description
                    shownId={shownId}
                    scpList={scpList}
                    level={level}
                    endRound={endRound}
                />
            </div>
            <ButtonComponent
                isDisabled={buttonDisabled}
                setNextLevel={setNextLevel}
                level={level}
                chooseHidden={chooseHidden}
                isRoundEnd={isRoundEnd}
                endGame={endGame}
                makeGameEnd={makeGameEnd}
            />
        </div>
    );
};

export default Answer;