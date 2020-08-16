import React, {useState} from 'react';

const Item = ({who, id, name}) => {
    const [checked, setChecked] = useState(false);

    const onCheckItem = (id) => {
        if (!checked) {
            console.log(who, id);
        }
        setChecked(true);
    };

    return (
        <li onClick={() => {onCheckItem(id)}}>
            {id} {name} {who}
        </li>
    );
};

export default Item;