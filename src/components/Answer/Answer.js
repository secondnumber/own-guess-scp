import React, {useState, useEffect} from 'react';
import Item from './Item/Item';
import Description from '../Description/Description';
import Button from '../Button/Button';

const Answer = ({who, scpList, level, setNextLevel, chooseHidden}) => {
    const [shownName, setShownName] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(null);

    const onItemClick = (name) => {
        setShownName(name);
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
            who={who}
            onItemClick={onItemClick}
            makeButtonActive={makeButtonActive}/>
    ));

    return (
        <div>
        Answer {who}
            <ul>
                {itemsList}
            </ul>
            <Description shownName={shownName}/>
            <Button isDisabled={buttonDisabled} setNextLevel={setNextLevel} level={level} chooseHidden={chooseHidden}/>
        </div>
    );
};

export default Answer;