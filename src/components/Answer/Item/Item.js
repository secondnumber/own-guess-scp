import React, {useState} from 'react';

const Item = ({who, id, name, onItemClick, makeButtonActive}) => {
    const [checked, setChecked] = useState(false);

    const onCheckItem = (id, name) => {
        if (!checked) {
            if (who === id) {
                console.log('correct!')
                makeButtonActive();
            } else {
                console.log('wrong!')
            }
        }
        setChecked(true);
        onItemClick(name);
    };

    return (
        <li onClick={() => {onCheckItem(id, name)}}>
            {id} {name} {who}
        </li>
    );
};

export default Item;