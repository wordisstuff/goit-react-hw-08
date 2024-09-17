import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations";
import { logout } from "../auth/operations";

const INIT_STATE = {
  items: null,
  selectedContact: null,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INIT_STATE,
  reducers: {
    setSelectedContact: (state, action) => {
      state.selectedContact = action.payload;
    },
  },
  // Об'єкт редюсерів
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        const contactIdx = state.items.findIndex(
          (contact) => contact._id === action.payload
        );
        state.items.splice(contactIdx, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const contactIdx = state.items.findIndex(
          (contact) => contact._id === action.payload.data._id
        );
        console.log(contactIdx);
        console.log(action.payload);
        state.items[contactIdx] = action.payload.data;
        state.selectedContact = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });
  },
});
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

export const { setSelectedContact } = contactsSlice.actions;
