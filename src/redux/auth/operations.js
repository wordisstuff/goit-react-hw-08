import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../api/api";

export const setToken = (token) => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  contactsApi.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.post("/users/signup", formData);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.post("/users/login", formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      setToken(token);
      const { data } = await contactsApi.get("/users/current");
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
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      const { data } = await contactsApi.patch("/users/avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (formData, { rejectWithValue }) => {
    try {
      await contactsApi.patch("/users/change-pwd", formData);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
