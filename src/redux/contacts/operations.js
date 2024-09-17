import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../api/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (contactType, { rejectWithValue }) => {
    try {
      console.log(contactType);
      const { data } = await contactsApi.get("http://localhost:8080/contacts", {
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
      const { data } = await contactsApi.post(
        "http://localhost:8080/contacts",
        contact
      );
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
      await contactsApi.delete(`http://localhost:8080/contacts/${id}`);
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
      const { data } = await contactsApi.patch(
        `http://localhost:8080/contacts/${id}`,
        contact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
