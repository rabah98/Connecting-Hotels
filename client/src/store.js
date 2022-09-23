import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./features /hotels/hotelsSlice";
import userReducer from "./features /user/usersSlice";

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
  },
  reducer: {
    user: userReducer,
  },
});

export default store;