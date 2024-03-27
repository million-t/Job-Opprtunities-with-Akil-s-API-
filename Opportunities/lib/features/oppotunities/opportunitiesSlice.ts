import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const api = "https://akil-backend.onrender.com/";

export const fetchOpportunities = createAsyncThunk(
    'opportunities/fetchOpportunities',
    async (thunkApi) => {
        const response = await fetch(api + "opportunities/search");
        const data = await response.json();
        return data.data;
    }
        
);

export const fetchOpportunity = createAsyncThunk(
    'opportunities/fetchOpportunity',
    async (id: string, thunkApi) => {
        const response = await fetch(api + "opportunities/" + id);
        const data = await response.json();
        return data.data;
    }

);

const initialState = {
    opportunities: [],
    currentOpportunity: {},
} as any


const opportunitiesSlice = createSlice({
    name: 'opportunities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOpportunities.fulfilled, (state, action) => {
            state.opportunities = action.payload;
        });
        builder.addCase(fetchOpportunity.fulfilled, (state, action) => {
            state.currentOpportunity = action.payload;
        });
    }
});


export default opportunitiesSlice.reducer;