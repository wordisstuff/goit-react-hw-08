import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {name:''
};

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INIT_STATE,
  // Об'єкт редюсерів
  reducers: {
      filterContacts(state, action) {
          state.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { filterContacts} = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;

export const selectorFilter = state => {
  return state.filter.name
}