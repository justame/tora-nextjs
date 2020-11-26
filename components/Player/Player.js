import React, { useState, useEffect } from 'react'
import styles from './Player.module.scss';
import Button from '@material-ui/core/Button';
import ReactAudioPlayer from 'react-audio-player';
const Player = ({ playlist }) => {
    const [currentIndex, setCurrentIndex] = useState(-1);

    const startPlay = () => {

    }

    const onPasukEnd = () => {
        if (currentIndex + 1 <= playlist.length - 1) {
            setCurrentIndex(currentIndex + 1)

        }
    }

    const next = () => {
        if (currentIndex + 1 <= playlist.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const back = () => {
        if (currentIndex - 1 >= 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    useEffect(() => {
        setCurrentIndex(0)
    }, [playlist])

    if (currentIndex < 0) {
        return null;
    }
    const currentItem = playlist[currentIndex];

    if (!currentItem) {
        return null;
    }

    return (
        <div className={styles.player}>
            <div className={styles.image}>
                <img src={currentItem.image} />
            </div>
            <div className={styles.audio}>
                <ReactAudioPlayer
                    src={currentItem.audio}
                    controls
                    autoPlay
                    onEnded={onPasukEnd}
                />
            </div>
            <div className={styles.caption}>
                פסוק{currentIndex + 1} מתוך {playlist.length}
            </div>
            {<div>
                <Button variant="contained" color="primary" onClick={back}>
                    אחורה
                </Button>
                &#160;

                <Button variant="contained" color="primary" onClick={next}>
                    קדימה
                </Button>

            </div>}
        </div>)
}

export default Player;