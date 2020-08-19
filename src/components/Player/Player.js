import React from 'react';
import './Player.less';
import AudioPlayer from 'react-h5-audio-player';

const  Player = ({playingItem, autoPlay}) => {
    return (
        <div>
            <AudioPlayer
                autoPlay={autoPlay}
                src={playingItem.sound}
                onPlay={e => console.log('onPlay')}
            />
        </div>
    );
};

export default Player;