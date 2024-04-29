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
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    .addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteContact.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      const contactIdx = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(contactIdx, 1);
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

  },
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
