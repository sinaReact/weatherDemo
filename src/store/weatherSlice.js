import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ID, API } from "../constants/API";

const initialState = { data: [], error: "", isDataFetching: false };

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeatherData_start: (state) => {
      state.isDataFetching = true;
      state.error = null;
    },

    getWeatherData_success: (state, action) => {
      state.isDataFetching = false;
      state.error = null;
      const {
        payload: { weathderData, locationName },
      } = action;

      if (!doesTheNewLocationAlreadyExist(state.data, locationName)) {
        state.data.unshift({
          locationName,
          currentWeatherData: weathderData.current,
          dailyWeatherData: weathderData.daily,
        });
      }
    },

    getWeatherData_error: (state, action) => {
      state.isDataFetching = false;
      state.error = action.payload;
    },

    removeLocation: (state, action) => {
      const newData = state.data.filter(
        (location) => location.locationName !== action.payload
      );
      state.data = newData;
    },
  },
});

///// Actions
export const {
  removeLocation,
  getWeatherData_start,
  getWeatherData_error,
  getWeatherData_success,
} = weatherSlice.actions;

/// Thunk Actions
export const getWeatherData = (location) => async (dispatch) => {
  const {
    latlng: { lat, lng },
    value,
  } = location;

  dispatch(getWeatherData_start());
  try {
    const { data } = await axios.get(
      `${API}lat=${lat}&lon=${lng}&appid=${API_ID}&units=metric`
    );
    dispatch(
      getWeatherData_success({ weathderData: data, locationName: value })
    );
  } catch (error) {
    console.log("error  ", error);
    dispatch(getWeatherData_error(error));
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
