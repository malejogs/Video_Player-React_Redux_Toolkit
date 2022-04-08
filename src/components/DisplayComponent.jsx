import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { play, pause } from "../store/controlsPlayer";

const Video = styled.video`
  width: 100%;
  height: 100%;
  filter: ${({ brightness, contrast }) =>
    `brightness(${brightness ?? 1}) contrast(${contrast ?? 1})`};
`;

const DisplayComponent = () => {
  const dispatch = useDispatch();
  const videoElementRef = useRef(null);
  const videoElement = videoElementRef.current;
  const { isPlaying, volume, videoData, brightness, contrast } = useSelector(
    (state) => state.controlsPlayer
  );

  useEffect(() => {
    if (videoElement && videoData?.sources?.[0]) {
      videoElement.src = videoData?.sources?.[0];
      videoElement.load();
      videoElement.play();
    }
  }, [videoElement, videoData]);

  useEffect(() => {
    videoElement && videoElement[isPlaying ? "play" : "pause"]();
  }, [isPlaying]);

  useEffect(() => {
    if (videoElement) {
      videoElement.volume = volume / 100;
    }
  }, [videoElement, volume]);

  return (
    <Video
      ref={videoElementRef}
      brightness={brightness}
      contrast={contrast}
      onPlay={() => dispatch(play())}
      onPause={() => dispatch(pause())}
      onLoad={() => dispatch(pause())}
    ></Video>
  );
};

export default DisplayComponent;
