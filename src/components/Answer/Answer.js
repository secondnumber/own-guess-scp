import React, {useState, useEffect} from 'react';
import Item from './Item/Item';
import Description from '../Description/Description';
import Button from '../Button/Button';

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

    const itemsList = scpList[level].map((el) => (
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
    ));

    return (
        <div>
        Answer {who}
            <ul>
                {itemsList}
            </ul>
            <Description
                shownId={shownId}
                scpList={scpList}
                level={level}
                endRound={endRound}
            />
            <Button
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