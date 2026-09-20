import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSkills } from "../../../api/getData";

export const fetchSkills = createAsyncThunk(
  "skills/fetchSkills",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getSkills();
      return data.intro[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default skillsSlice.reducer;
