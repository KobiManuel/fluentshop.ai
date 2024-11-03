import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../slices/authSlice";

const clientStore = configureStore({
  reducer: {
    auth: authReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(
  //       accountsApi.middleware,
  //       onboardingApi.middleware,
  //       countriesApi.middleware,
  //       buyerApi.middleware
  //     ),
});

setupListeners(clientStore.dispatch);

export default clientStore;
