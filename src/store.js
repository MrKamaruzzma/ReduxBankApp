import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/features/accounts/accountSlice";
import customerReducer from "./features/features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
