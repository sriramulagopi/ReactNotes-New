import {configureStore, createSlice} from "@reduxjs/toolkit";
const reducer1 = createSlice({
    name:"loginStatus",
    initialState:{status:false,data:null},
    reducers:{
        uponLogin:(state,action)=>{
            state.status=true;
            state.data=action.payload.data;
        },
        logout:(state,action)=>{
            state.status=false;
            state.data=null;
        }
    }
})
const reducer2 = createSlice({
    name:"userInfo",
    initialState:{data:null},
    reducers:{
        userData:(state,action)=>{
            state.data=action.payload.data;
        }
    }
})
const reducer3 = createSlice({
    name:"postList",
    initialState:{data:null},
    reducers:{
        postsData:(state,action)=>{
            state.data=action.payload.data;
        },
        addPost:(state,action)=>{
            state.data.push(action.payload)
        }
    }
})
export const {postsData,addPost} = reducer3.actions;
export const {userData} = reducer2.actions;
export const {uponLogin,logout}=reducer1.actions;
export const store = configureStore({
    reducer:{
        a:reducer1.reducer,
        b:reducer2.reducer,
        c:reducer3.reducer,
    }
})