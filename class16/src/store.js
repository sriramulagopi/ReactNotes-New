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
const reducer2 = createSlice({
    name:"likedSongs",
    initialState:{},
    reducers:{
        addSong:(state,action)=>{
            return {...state,[action.payload.songId]:action.payload};
        },
        removeSong:(state,action)=>{
            delete state[action.payload.songId];
        }
    }
})
export const {setBool} = reducer1.actions;
export const {addSong,removeSong} = reducer2.actions;
const store = configureStore({reducer:{
    a:reducer1.reducer,
    b:reducer2.reducer,
}})
export default store;