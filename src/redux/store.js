import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from './contacts/slice'
import { filtersReducer } from "./filters/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { globalReducer } from "./global/slice";

const authPeristConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    global: globalReducer,
              contacts: contactsReducer,
              filter: filtersReducer,
              auth: persistReducer(authPeristConfig, authReducer),
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)