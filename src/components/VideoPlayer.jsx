import React, { useRef, useState, useEffect } from 'react';
import './css/root.css';

const DEFAULT_VOLUME_PERCENT = 70;

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME_PERCENT);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100;
    }

    let hideControlsTimeout;
    if (isPlaying) {
      hideControlsTimeout = setTimeout(() => setShowControls(false), 5000);
    }
    return () => clearTimeout(hideControlsTimeout);
  }, [isPlaying, volume]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleExitFullScreen();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const getVolumeIcon = () => {
    if (volume === 0) return '🔇';
    if (volume < 20) return '🔈';
    if (volume < 70) return '🔉';
    return '🔊';
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsStarted(true);
      setShowControls(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };


  const handleMouseMove = () => {
    setShowControls(true);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
    }
    event.target.style.setProperty('--progress', `${newVolume}%`);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      setCurrentTime(current);

      const progress = (current / duration) * 100;
      const progressBar = document.getElementById('time-progress');
      if (progressBar) {
        progressBar.style.setProperty('--time-progress', `${progress}%`);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (event) => {
    const newTime = parseFloat(event.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

    const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      handleExitFullScreen();
    }
  };

    const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="video-player" ref={containerRef}>
      {!isStarted && (
        <button className="start-button" onClick={handlePlayPause}></button>
      )}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleVideoEnd}
        onMouseMove={handleMouseMove}
        onClick={handlePlayPause}
        className="video-element"
      />
      {!isPlaying && (
        <button className="start-button" onClick={handlePlayPause}></button>
      )}
      {showControls && (
        <div className="controls">
          <div className="progress-bar">
            <input
              id='time-progress'
              className='progress'
              type="range"
              min="0"
              max={duration}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
            />
          </div>
          <div className="other-bar">
            <button onClick={handlePlayPause} className='play'>
              {isPlaying ? '❚❚' : currentTime === 0 || currentTime === duration ? '🔄' : '▶'}
            </button>
            <div className="volume-control">
              <label htmlFor="volume" className='volume'>{getVolumeIcon()}</label>
              <input
                className='volume-bar'
                id="volume"
                type="range"
                min="0"
                max="100"
                step="1"
                value={volume}
                onChange={handleVolumeChange}
                style={{ background: `linear-gradient(to right, #dcdcdc ${volume}%, #a2a2a235 ${volume}%)` }}
              />
            </div>
            <div className="progress-control">
              <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
            </div>
            <button onClick={handleFullScreen} className='screen'>{isFullScreen ? '💢' : '⭕'}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
