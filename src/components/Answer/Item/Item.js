import React, {useState, useEffect} from 'react';

const Item = ({who, id, name, onItemClick, makeButtonActive}) => {
    const [clicked, setClicked] = useState(null);

    useEffect(() => {
        setClicked(false);
    }, [who]);

    const myFunc = () => {
        if (who === id) {
            alert('hey');
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

/*     const onCheckItem = (id, name) => {
        if (!checked) {
            if (who === id) {
                console.log('correct!')
                makeButtonActive();
            } else {
                console.log('wrong!')
            }
        } else if (checked) {
            console.log('just checked!')
        }
        onItemClick(name);
        setChecked(true);
    }; */