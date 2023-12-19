import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./car";
import ordersReducer from "./order";
import shipmentReducer from "./shipment";

const allReducers = combineReducers({
  users : userReducer,
  shipments: shipmentReducer,
  cars: carReducer,
  orders:ordersReducer,
  
});

export default allReducers;