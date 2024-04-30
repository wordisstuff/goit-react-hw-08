import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../api/api";

export const setToken = token => {
    contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export const  clearToken = () => {
    contactsApi.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
    "auth/register",
    async (formData, { rejectWithValue }) => {try {
      const { data } = await contactsApi.post("/users/signup", formData);
        console.log("REGISTER data: ", data);
        setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
    }
)

export const login = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
        const { data } = await contactsApi.post("/users/login", formData);
        console.log("login data: ", data);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState}) => {
    try {
      const state = getState();
      const token = state.auth.token;
      setToken(token);
      const { data } = await contactsApi.get("/users/current");
      console.log("REFRESH data: ", data);

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await contactsApi.post("/users/logout");
      clearToken();
      return;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
