import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  allCampaigns: [],
  startDate: "",
  endDate: "",
  userSearch: "",
};

export const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = false;
    },
    setAllCampaigns: (state, action) => {
      state.allCampaigns = [...action.payload];
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload
    },
    setUserSearch: (state, action) => {
      state.userSearch = action.payload
    },
  },
});

export const { setIsLoading, setAllCampaigns, setStartDate, setEndDate, setUserSearch } = campaignsSlice.actions;

export const selectIsLoading = (state) => state.campaigns.isLoading;

export const selectCampaigns = (state) => state.campaigns.allCampaigns;

export const selectStartDate = (state) => state.campaigns.startDate;

export const selectEndDate = (state) => state.campaigns.endDate;

export const selectUserSearch = (state) => state.campaigns.userSearch;

export default campaignsSlice.reducer;
