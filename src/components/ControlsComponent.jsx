import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Stack,
  Box,
  Popper,
  IconButton,
  Slider,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography
} from "@mui/material";

import {
  PlayArrow,
  Pause,
  VolumeDown,
  VolumeUp,
  BrightnessMedium,
  Contrast
} from "@mui/icons-material";

import {
  setVideo,
  play,
  pause,
  setVolume,
  setBrightness,
  setContrast
} from "../store/controlsPlayer";

import styled from "@emotion/styled";

const SliderControl = styled(Slider)`
  min-width: 70px;
  color: black;
`;

const ListContainer = styled(Popper)`
  height: 70%;
  overflow: auto;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
`;

const ControlsComponent = ({ list }) => {
  const { isPlaying, volume, brightness, contrast, videoData } = useSelector(
    (state) => state.controlsPlayer
  );
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenList = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "top" : undefined;

  useEffect(() => {
    list?.[0] && dispatch(setVideo(list[0]));
  }, [list?.[0]]);

  const handlerVolume = (e) => {
    e?.target?.value !== volume && dispatch(setVolume(e.target.value));
  };

  const handlerBrightness = (e) => {
    e?.target?.value !== brightness && dispatch(setBrightness(e.target.value));
  };

  const handlerContrast = (e) => {
    e?.target?.value !== contrast && dispatch(setContrast(e.target.value));
  };

  const handlerChangeVideo = (video) => {
    handleOpenList();
    dispatch(setVideo(video));
  };

  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          color="primary"
          aria-label="play/pause video"
          onClick={() => dispatch(isPlaying ? pause() : play())}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <Stack spacing={1} direction="row" alignItems="center">
          <VolumeDown fontSize="small" zIndex="2" />
          <SliderControl
            aria-label="Volume"
            size="small"
            value={volume}
            onChange={handlerVolume}
            valueLabelDisplay="auto"
          />
          <VolumeUp fontSize="small" />
        </Stack>
        <div>
          <Button
            variant="outlined"
            aria-describedby={id}
            type="button"
            onClick={handleOpenList}
          >
            {videoData.title}
          </Button>
          <ListContainer id={id} open={open} anchorEl={anchorEl}>
            {list.map((video) => (
              <Card
                sx={{ maxWidth: 700 }}
                onClick={() => handlerChangeVideo(video)}
              >
                <CardActionArea sx={{ display: "flex" }}>
                  <CardMedia
                    sx={{ width: "45%" }}
                    component="img"
                    height="100"
                    image={video.thumb}
                    alt={video.title}
                  />
                  <CardContent sx={{ width: "100%" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {video.title}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                      {video.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </ListContainer>
        </div>
        <Stack spacing={1} direction="row" alignItems="center">
          <BrightnessMedium fontSize="small" />
          <SliderControl
            aria-label="Brightness"
            size="small"
            step={0.1}
            min={0}
            max={2}
            value={brightness}
            onChange={handlerBrightness}
            valueLabelDisplay="auto"
          />
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center">
          <Contrast fontSize="small" />
          <SliderControl
            aria-label="Brightness"
            size="small"
            step={0.1}
            min={0}
            max={2}
            value={contrast}
            onChange={handlerContrast}
            valueLabelDisplay="auto"
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ControlsComponent;
