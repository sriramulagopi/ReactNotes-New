import {configureStore, createSlice} from "@reduxjs/toolkit";
const reducer1 = createSlice({
    name:"playSong",
    initialState:{bool:false},
    reducers:{
        setBool:(state,action)=>{
            return {...action.payload};
        }
    }
})
export const {setBool} = reducer1.actions;
const store = configureStore({reducer:{
    a:reducer1.reducer,
}})
export default store;