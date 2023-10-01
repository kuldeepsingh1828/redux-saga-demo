import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_CALL_URL = 'https://jsonplaceholder.typicode.cm/users';

const getAllUsers = createAsyncThunk('getusers', async () => {
    const response = await axios.get(API_CALL_URL);
    return response.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        error: null,
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state, action) => {
            console.log("getAllUsers.pending")
            state.loading = true;
        })
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            console.log("getAllUsers.fulfilled")
            state.loading = false;
            state.users = action.payload;
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            console.log("getAllUsers.rejected")
            state.loading = false;
            state.error = action.payload;
        })
    }
})

console.log(userSlice)
export { getAllUsers };
export default userSlice.reducer;


// get all-users --> aN api call 1
// get 1-users by id --> aN api call 2
// delete 1-users by id --> aN api call 3