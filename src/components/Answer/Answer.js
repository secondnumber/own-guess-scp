import React, {useState, useEffect} from 'react';
import Item from './Item/Item';
import Description from '../Description/Description';

const Answer = ({who, scpList, level}) => {
    const [hidden, setHidden] = useState(null);
    const [shownName, setShownName] = useState(null);

    const onItemClick = (name) => {
        setShownName(name);
    };

    useEffect(() => {
        setHidden(who);
    }, [hidden]);

    const itemsList = scpList[level].map((el) => (
        <Item key={el.id} id={el.id} name={el.name} who={who} onItemClick={onItemClick}/>
    ));

    return (
        <div>
        Answer {who}
            <ul>
                {itemsList}
            </ul>
            <Description shownName={shownName}/>
        </div>
    );
};

export default Answer;