import React, {useState, useEffect, useRef} from 'react';
import Item from './Item/Item';

const Answer = ({who, scpList, level}) => {
    const [hidden, setHidden] = useState(null);

    useEffect(() => {
        setHidden(who);
    }, [hidden]);

    const itemsList = scpList[level].map((el) => (
        <Item key={el.id} id={el.id} name={el.name} who={who} />
    ));

    return (
        <div>
        Answer {who}
            <ul>
                {itemsList}
            </ul>
        </div>
    );
};

export default Answer;