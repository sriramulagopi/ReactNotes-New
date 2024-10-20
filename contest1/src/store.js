import {configureStore, createSlice} from "@reduxjs/toolkit";
const reducer1 = createSlice({
    name:"PostCode",
    initialState:{apiStatus:"init",data:null},
    reducers:{
        postCodeDetails:(state,action)=>{
            return {...action.payload}
        }
    }
})
export const {postCodeDetails} = reducer1.actions;
export const store = configureStore({reducer:{
    a:reducer1.reducer,
}})