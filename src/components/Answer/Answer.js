import React, {useState, useEffect} from 'react';
import ListComponent from './Item/ListComponent';
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

    return (
        <div className={classes.wrapper}>
            <div className={classes.contentBlock}>
                <ListComponent
                    scpList={scpList}
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