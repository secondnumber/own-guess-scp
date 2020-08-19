import React from 'react';

const Description = ({shownId, scpList, level}) => {
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
                <audio src={shownItem.sound} controls></audio>
                {shownItem.hazard}
            </div>
        );
    }
};

export default Description;