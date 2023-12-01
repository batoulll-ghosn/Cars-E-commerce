import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./car";
import shipmentReducer from "./shipment";
import cardReducer from "./card";

const allReducers = combineReducers({
  users : userReducer,
  shipments: shipmentReducer,
  cars: carReducer,
  cards : cardReducer
});

export default allReducers;