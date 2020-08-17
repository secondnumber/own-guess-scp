import React, {useState, useEffect} from 'react';

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
