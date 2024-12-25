import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi, URLA } from "../../api/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (contactType, { rejectWithValue }) => {
    try {
      console.log(contactType);
      const { data } = await contactsApi.get("contacts", {
        params: { type: contactType },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.post("/contacts", contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.delete(`${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, ...contact }, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.patch(`/contacts/${id}`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
