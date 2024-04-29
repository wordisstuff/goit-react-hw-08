import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../api/api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await contactsApi.get("/contacts");
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, { rejectWithValue }) => {
        try {
            const response = await contactsApi.post("/contacts", contact)
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, { rejectWithValue }) => {
        try {
            const response = await contactsApi.delete(`/contacts/${id}`)
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

