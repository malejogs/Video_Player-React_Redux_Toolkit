import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoData: {},
  isPlaying: false,
  volume: 100,
  brightness: 1,
  contrast: 1
};

export const controlsPlayerSlice = createSlice({
  name: "controlsPlayer",
  initialState,
  reducers: {
    setVideo: (state, action) => {
      state.videoData = action.payload;
    },
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setBrightness: (state, action) => {
      state.brightness = action.payload;
    },
    setContrast: (state, action) => {
      state.contrast = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setVideo,
  play,
  pause,
  setVolume,
  setBrightness,
  setContrast
} = controlsPlayerSlice.actions;

export default controlsPlayerSlice.reducer;
