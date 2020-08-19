import React, {useEffect} from 'react';

const Question = ({who, level, chooseHidden, scpList}) => {

    useEffect(() => {
        chooseHidden();
    }, [level]);

    const hiddenItem = scpList[level][who];
    console.log(who);

    if (who === null) {
        return (
            <div>
              Loading
            </div>
        );
    }
    if (who >= 0) {
        return (
            <div>
                <img src={hiddenItem.image} alt={hiddenItem.name}/>
                [Данные удалены]
                {hiddenItem.name}
                <audio src={hiddenItem.sound} controls />
            </div>
        );
    }

};

export default Question;