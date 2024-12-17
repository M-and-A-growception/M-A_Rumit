import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import combineReducers from './rootReducer';
import mysaga from "./saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, combineReducers)

  
  
  
  
  
  
  export const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(
      //   {
      //   serializableCheck: {
      //     // Ignore specific paths in the state
      //     ignoredPaths: ['register', 'rehydrate'],
      //     // Ignore specific action types
      //     ignoredActions: ['persist/PERSIST'],
      //   },
      // }
    ).concat(sagaMiddleware)
    });
    export const persistor = persistStore(store);
    sagaMiddleware.run(mysaga)

