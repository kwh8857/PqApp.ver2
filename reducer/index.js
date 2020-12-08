import {
  combineReducers
} from "redux";
import layouts from "./layouts";
import config from "./config";

const rootReudcer = combineReducers({
  layouts,
  config


})
export default rootReudcer