import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../api/api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await contactsApi.get("/contacts");
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, { rejectWithValue }) => {
        try {
            const {data} = await contactsApi.post("/contacts", contact)
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, { rejectWithValue }) => {
        try {
            const response = await contactsApi.delete(`/contacts/${id}`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const logOutContact = createAsyncThunk(
    "contacts/logOutContact",() => null
    // async (_, { rejectWithValue}) => {
    //     try {
    //         return null; 
    //     } catch (error) {
    //         return rejectWithValue(error.message);
    //     }
    // }
)
