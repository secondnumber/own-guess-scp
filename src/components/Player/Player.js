import React, { createRef, useEffect, useRef } from 'react';
import './Player.less';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

const  Player = ({playingItem}) => {
    const player = useRef(null);
    useEffect(() => {
        player.current.audio.current.pause();
    });

    return (
        <div>
            <AudioPlayer
                ref={player}
                autoPlay={false}
                showJumpControls={false}
                customProgressBarSection={
                    [
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.PROGRESS_BAR,
                        RHAP_UI.VOLUME,
                    ]
                }
                customVolumeControls={[]}
                customControlsSection={
                    [
                        RHAP_UI.CURRENT_TIME,
                        RHAP_UI.DURATION,
                    ]
                }
                src={playingItem.sound}
            />
        </div>
    )
};

export default Player;