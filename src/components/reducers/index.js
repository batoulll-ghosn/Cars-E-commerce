import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./car";
import ordersReducer from "./order";
const allReducers = combineReducers({
  users : userReducer,
 // shipments: shipmentReducer,
  cars: carReducer,
  orders:ordersReducer,
 // cards : cardReducer
});

export default allReducers;