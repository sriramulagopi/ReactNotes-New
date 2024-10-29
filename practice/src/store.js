import {legacy_createStore as createStore,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
const reducer1 = (state,action)=>{
    if(action.type==="incre"){
        return {count:++state.count};
    }
    if(action.type==="decre"){
        return {count:--state.count};
    }
    return {count:0}
}
const store = createStore(reducer1,applyMiddleware(thunk))
export default store;