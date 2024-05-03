import {  createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  loading: false,
  error: null
};

const globalSlice = createSlice({
  // Ім'я слайсу
  name: "global",
  // Початковий стан редюсера слайсу
  initialState: INIT_STATE,
  // Об'єкт редюсерів
  extraReducers: (builder) => {
    builder
      .addMatcher((action)=> action.type.endsWith('pending'),handlePending)
      .addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
      .addMatcher((action) => action.type.endsWith('fulfilled'), handleFulfilled)
  },
});

const handlePending = state => {
      state.loading = true;
      state.error = null;
}
const handleFulfilled = state => {
    state.loading = false;
}

const handleRejected = (state, action) => {
      state.loading = false;
      state.error = action.payload;
}

// Редюсер слайсу
export const globalReducer = globalSlice.reducer;
