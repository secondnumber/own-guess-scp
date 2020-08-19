import React, {useState, useEffect} from 'react';

const Question = ({who, level, chooseHidden, scpList}) => {

    useEffect(() => {
        chooseHidden();
    }, [level]);

    const hiddenItem = scpList[level][who];
    console.log(hiddenItem);

    if (!who) {
        return (
            <div>
              Loading
            </div>
        );
    }
    if (who) {
        return (
            <div>
                [Данные удалены]
                {hiddenItem.name}
            </div>
        );
    }

};

export default Question;