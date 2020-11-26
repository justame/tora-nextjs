/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import ReactAudioPlayer from 'react-audio-player';
import styles from './Player.module.scss';

const Player = ({ playlist }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const audioPlayerElement = useRef(null);

  const onPasukEnd = () => {
    if (currentIndex + 1 <= playlist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const next = () => {
    if (currentIndex + 1 <= playlist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const back = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const pause = () => {
    if (audioPlayerElement.current) {
      audioPlayerElement.current.audioEl.current.pause();
    }
  };

  const play = () => {
    if (audioPlayerElement.current) {
      audioPlayerElement.current.audioEl.current.play();
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [playlist]);

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
          ref={audioPlayerElement}
          src={currentItem.audio}
          controls
          autoPlay
          onEnded={onPasukEnd}
        />
      </div>
      <div className={styles.caption}>
        פסוק
        <span className={styles.current}>
          {currentIndex + 1}
        </span>
        {'  '}
        מתוך
        {'  '}
        <span className={styles.length}>
          {playlist.length}

        </span>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={pause}>
          הפסק
        </Button>
                &#160;
        <Button variant="contained" color="primary" onClick={play}>
          המשך
        </Button>
                &#160;
        <Button variant="contained" color="primary" onClick={back}>
          פסוק אחורה
        </Button>
                &#160;

        <Button variant="contained" color="primary" onClick={next}>
          פסוק הבא
        </Button>

      </div>
    </div>
  );
};

export default Player;
