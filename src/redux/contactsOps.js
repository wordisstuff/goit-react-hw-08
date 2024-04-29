import { createAsyncThunk } from "@reduxjs/toolkit";
import {  getContacts, getDeleteContact, postContact } from "../api/api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getContacts()
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
            const response = await postContact(contact)
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
            const response = await getDeleteContact(id)
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

