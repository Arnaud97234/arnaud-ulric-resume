import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getExperience } from "../../../api/getData";

export const fetchExperience = createAsyncThunk(
  "experience/fetchExperience",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getExperience();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default experienceSlice.reducer;
