import { combineReducers } from "redux";
import hotelsReducer from "./features /hotels/hotelsSlice";
import userReducer from "./features /user/usersSlice";

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  user: userReducer
});

export default rootReducer;