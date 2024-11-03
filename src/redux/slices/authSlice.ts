import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the AuthState interface
interface ClientData {
  id: string;
  first_name: string;
  last_name: string;
  email_address: string;
}

// Define the initial state type
interface AuthState {
  value: ClientData;
}

// Initial state
const sampleClient: AuthState = {
  value: {
    id: "",
    first_name: "",
    last_name: "",
    email_address: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: sampleClient,
  reducers: {
    updateAuthData: (state, action: PayloadAction<Partial<ClientData>>) => {
      // Using Partial<ClientData> for `action.payload` allows partial updates
      let keys = Object.keys(action.payload) as (keyof ClientData)[];
      keys.forEach((key) => {
        state.value[key] = action.payload[key]!;
      });
    },
  },
});

export const { updateAuthData } = authSlice.actions;

export default authSlice.reducer;
