import React, {useState, useEffect} from 'react';

const Item = ({level, who, id, name, onItemClick, makeButtonActive, attemptScore, totalScore, countAttemptScore, countTotalScore}) => {
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
        } else {
            countAttemptScore(attemptScore + 1);
            console.log('wrong')
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
        <button onClick={() => {onClick(id)}}>
            {id} {name} {who}
        </button>
    );
};

export default Item;
