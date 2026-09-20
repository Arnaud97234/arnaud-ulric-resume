import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import experienceReducer from "./slices/experienceSlice";
import skillsReducer from "./slices/skillsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    experience: experienceReducer,
    skills: skillsReducer,
  },
});

export default store;
