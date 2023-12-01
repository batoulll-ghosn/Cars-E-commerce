import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./car";
import shipmentReducer from "./shipment";
import ordersReducer from "./order";
const allReducers = combineReducers({
  users : userReducer,
  shipments: shipmentReducer,
  cars: carReducer,
  orders:ordersReducer,
});

export default allReducers;