"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "@/lib/redux/slices/userSlice";
import { fetchExperience } from "@/lib/redux/slices/experienceSlice";
import { fetchSkills } from "@/lib/redux/slices/skillsSlice";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <StoreInitializer />
      {children}
    </Provider>
  );
}

function StoreInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initial data fetch on application load
    dispatch(fetchProfile());
    dispatch(fetchExperience());
    dispatch(fetchSkills());
  }, [dispatch]);

  return null;
}
