import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { setWeatherDataLoading } from "./UISlice";
import { API_ID, API } from "../constants/API";

const initialState = [];

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    removeLocation: (state, action) => {
      const newState = state.filter(
        (location) => location.locationName !== action.payload
      );

      return newState;
    },

    addLocation: (state, action) => {
      const {
        payload: { weathderData, locationName },
      } = action;

      if (!doesTheNewLocationAlreadyExist(state, locationName)) {
        state.unshift({
          locationName,
          currentWeatherData: weathderData.current,
          dailyWeatherData: weathderData.daily,
        });
      }
    },
  },
});

///// Actions
export const { removeLocation, addLocation } = weatherSlice.actions;

/// Thunk Actions
export const getWeatherData = (location) => async (dispatch) => {
  const {
    latlng: { lat, lng },
    value,
  } = location;

  dispatch(setWeatherDataLoading(true));
  try {
    const { data } = await axios.get(
      `${API}lat=${lat}&lon=${lng}&appid=${API_ID}&units=metric`
    );
    dispatch(addLocation({ weathderData: data, locationName: value }));
    dispatch(setWeatherDataLoading(false));
  } catch (error) {
    console.log("error  ", error);
  }
};

//// helpers
const doesTheNewLocationAlreadyExist = (state, newLocationName) => {
  for (const data of state) {
    if (data.locationName === newLocationName) {
      return true;
    }
  }
  return false;
};

export default weatherSlice.reducer;
