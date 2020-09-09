import { combineReducers } from "redux";

import { Users } from "./Users";
import { Settings } from "./Settings";

export default combineReducers({ users: Users });
