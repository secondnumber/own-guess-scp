import React from 'react';
import Player from '../Player/Player';
import CorrectSound from '../../assets/correctSound.mp3';
import WrongSound from '../../assets/wrongSound.mp3';

const Description = ({shownId, scpList, level, endRound}) => {
    const shownItem = scpList[level][shownId];

    if (shownId === null) {
        return (
            <div>
              Послушайте звук и выберите существо
            </div>
        );
    }

    if (shownId >=0 ) {
        return (
            <div>
                <img src={shownItem.image} alt={shownItem.name}/>
                {shownItem.name}
                {shownItem.type}
                <Player playingItem={shownItem} autoPlay={false}/>
                {shownItem.hazard}
                {!endRound ? <audio src={WrongSound} autoPlay /> : <audio src={CorrectSound} autoPlay />}
            </div>
        );
    }
};

export default Description;