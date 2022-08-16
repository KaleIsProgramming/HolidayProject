import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menu.slice"


const store = configureStore({
    reducer: { 
        menuSlice,
    },
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;