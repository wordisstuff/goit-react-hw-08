import {  createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const INIT_STATE = {
  items: null,
  loading: false,
  error: null
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INIT_STATE,
  // Об'єкт редюсерів
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
    })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items,action.payload]
    })

      .addCase(deleteContact.fulfilled, (state, action) => {
      const contactIdx = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(contactIdx, 1);
    })
    
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
export const contactsReducer = contactsSlice.reducer;
