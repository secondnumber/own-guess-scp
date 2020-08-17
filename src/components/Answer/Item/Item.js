import React, {useState, useEffect} from 'react';

const Item = ({level, who, id, name, onItemClick, makeButtonActive}) => {
    const [clicked, setClicked] = useState(null);

    useEffect(() => {
        setClicked(false);
    }, [level]);

    const myFunc = () => {
        if (who === id) {
            console.log('hey');
            makeButtonActive();
        } else {
            console.log('wrong')
        }
    };

    const onClick = () => {
        if (!clicked) {
            setClicked(true);
            myFunc();
        }
    };

    return (
        <button onClick={() => {onClick()}}>
            {id} {name} {who}
        </button>
    );
};

export default Item;
