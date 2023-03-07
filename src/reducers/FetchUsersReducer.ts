import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// create thunk function using createAsyncThunk
export const fetchUsers = createAsyncThunk("api/fetchuser",
    async (id: number) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
                withCredentials: true,
            });
            console.log("API-response", response.data, typeof (response.data));
            return response.data;
        }
        catch (err) {
            // Custom error message from Server returned to reducer using rejectWithValue
            // This error is available in action.payload unlike action.error for unhandled errors
            return err;
        }
    }
);

interface UsersState {
    entities: Object[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    entities: [],
    loading: 'idle',
} as UsersState


// Define the slice method that contains the actions which connects to the thunk above
export const fetchUsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state if needed
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = 'pending';
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.loading = 'failed';
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any>) => {
            // Add users to the state array
            // console.log(action.payload);
            state.entities = action.payload;
            state.loading = 'succeeded';
        })
    },
});

// Later, dispatch the thunk as needed in the app
// dispatch(fetchUsers(2)) 