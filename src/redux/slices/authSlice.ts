import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the AuthState interface
interface ClientData {
  id: string;
  first_name: string;
  last_name: string;
  email_address: string;
  onboarding_stage: number;
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
    onboarding_stage: 1,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: sampleClient,
  reducers: {
    updateAuthData: (state, action: PayloadAction<Partial<ClientData>>) => {
      // Using Partial<ClientData> for `action.payload` allows partial updates
      Object.keys(action.payload).forEach((key) => {
        (state.value[key as keyof ClientData] as any) = action.payload[key as keyof ClientData]!;
      });
    },
  },
});

export const { updateAuthData } = authSlice.actions;

export default authSlice.reducer;
