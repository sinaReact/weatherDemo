import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    needMore: false,
    gotcha: false,
  },
};

export const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    setNeedMore: (state, action) => {
      state.modal.needMore = action.payload;
    },
    setGotcha: (state, action) => {
      state.modal.gotcha = action.payload;
    },
  },
});

// Actions
export const { setNeedMore, setGotcha } = UISlice.actions;

export default UISlice.reducer;
