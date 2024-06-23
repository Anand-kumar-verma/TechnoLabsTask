import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "changeTheme",
  initialState,
  reducers: {
    changeValueTheme: (state, action) => {
        console.log(action.payload)
      state.value = action.payload;
    },
  },
});

export const {changeValueTheme } = themeSlice.actions;

export default themeSlice.reducer;
