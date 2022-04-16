import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "../redux/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});
