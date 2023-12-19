import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./car";
import ordersReducer from "./order";
import reviewsReducer from "./review";
import shipmentReducer from "./shipment";
const allReducers = combineReducers({
  users : userReducer,
  shipments: shipmentReducer,
  cars: carReducer,
  orders:ordersReducer,
  reviews:reviewsReducer,
 // cards : cardReducer
});

export default allReducers;