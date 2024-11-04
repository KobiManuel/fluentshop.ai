"use client";

import { Provider } from "react-redux";
import store from "@/redux/store/store";

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}