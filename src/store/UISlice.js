import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWeatherDataLoading: false,
  modal: {
    needMore: false,
    locationNotFound: false,
    gotcha: false,
  },
};

export const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    setWeatherDataLoading: (state, action) => {
      state.isWeatherDataLoading = action.payload;
    },
    setNeedMore: (state, action) => {
      state.modal.needMore = action.payload;
    },
    setLocationNotFound: (state, action) => {
      state.modal.locationNotFound = action.payload;
    },
    setGotcha: (state, action) => {
      state.modal.gotcha = action.payload;
    },
  },
});

// Actions
export const {
  setWeatherDataLoading,
  setNeedMore,
  setLocationNotFound,
  setGotcha,
} = UISlice.actions;

export default UISlice.reducer;
