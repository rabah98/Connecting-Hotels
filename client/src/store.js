import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./features /hotels/hotelsSlice";
import userReducer from "./features /user/usersSlice";
import roomsReducer from "./features /rooms /roomsSlice";

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
  },
  reducer: {
    user: userReducer,
  },
  reducer: {
    rooms: roomsReducer,
  },
});

export default store;