import { combineReducers } from "redux";
import { reducer1 } from "./reducers";


export default combineReducers({
    reducer1,
    // reducer2, if you have multiple reducer you can use like that
    // reducer3,
});