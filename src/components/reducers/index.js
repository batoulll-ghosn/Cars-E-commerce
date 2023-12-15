import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./car";
import ordersReducer from "./order";
import reviewReducer from "./review";
const allReducers = combineReducers({
  users : userReducer,
  // shipments: shipmentReducer,
  cars: carReducer,
  orders:ordersReducer,
  // cards : cardReducer,
  review: reviewReducer
});

export default allReducers;