import { combineReducers } from "redux";
import hotelsReducer from "./features /hotels/hotelsSlice";
import userReducer from "./features /user/usersSlice";
import roomsReducer from "./features /rooms /roomsSlice";

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  user: userReducer,
  rooms: roomsReducer
});

export default rootReducer;