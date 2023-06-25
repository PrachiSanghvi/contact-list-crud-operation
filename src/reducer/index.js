import { FetchContactDetail } from "./contactReducer";
import { combineReducers } from "@reduxjs/toolkit";
// combine reducers
const contactReducer = combineReducers({ FetchContactDetail})
export default contactReducer;