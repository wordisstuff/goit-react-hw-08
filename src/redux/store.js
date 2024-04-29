// import { createStore, combineReducers } from "redux"
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { contactsReducer } from "./contacts/contactsReducer"

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// })

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer)

// **********************************************************
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from './contactsSlice'
import { filtersReducer } from "./filtersSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const contactsPeristConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };

export const store = configureStore({
  reducer: {
              contacts: contactsReducer,
        // contacts: persistReducer(contactsPeristConfig,contactsReducer),
        filter: filtersReducer
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
});

// export const persistor = persistStore(store)