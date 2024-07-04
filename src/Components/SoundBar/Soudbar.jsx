import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import music from "../SoundBar/Insurrection.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 3.5rem;
  top: 6rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const play = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
  100% {
    transform: scaleY(1);
  }
`;

const Line = styled.span`
  background: var(--blue-color);
  border: 1.6px solid;
  animation: ${play} 1.4s ease infinite;
  animation-play-state: ${props => (props.click ? 'running' : 'paused')};
  height: 1rem;
  width: 10px;
  margin: 0 0.1rem;
`;

const SoundBar = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set volume to 10%
    }
  }, []);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <Box onClick={handleToggle}>
      <Line click={isPlaying} />
      <Line click={isPlaying} />
      <Line click={isPlaying} />
      <Line click={isPlaying} />
      <Line click={isPlaying} />

      <audio src={music} ref={audioRef} loop />
    </Box>
  );
};

export default SoundBar;