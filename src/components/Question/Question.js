import React, {useEffect} from 'react';
import 'react-h5-audio-player/lib/styles.less';
import Player from '../Player/Player';

const Question = ({who, level, chooseHidden, scpList, endRound}) => {

    useEffect(() => {
        chooseHidden();
    }, [level]);

    const hiddenItem = scpList[level][who];
    console.log(who);

    if (who === null && !endRound) {
        return (
            <div>
              Loading
            </div>
        );
    }
    if (who >= 0 && !endRound) {
        return (
            <div>
                [Данные удалены]
                <Player playingItem={hiddenItem} autoPlay={false}/>
            </div>
        );
    }

    if (endRound) {
        return (
            <div>
                <img src={hiddenItem.image} alt={hiddenItem.name}/>
                {hiddenItem.name}
                <Player playingItem={hiddenItem} autoPlay={false}/>
            </div>
        );
    }

};

export default Question;