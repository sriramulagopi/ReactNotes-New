import { configureStore, createSlice} from "@reduxjs/toolkit";
export const ApiStatus = {
  init: "init",
  pending: "pending",
  success: "success",
  error: "error",
};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: { apiStatus: "init", data: null },
  reducers: {
    setUserInfo: (state, action) => {
      state.apiStatus = action.payload.apiStatus;
      action.payload.data && (state.data = action.payload.data);
    },
    commentIncrement:(state,action)=>{
      state.data.posts=+1;
    }
  },
});
const postSlice = createSlice({
  name:"Posts",
  initialState:{apiStatus:"init",data:[]},
  reducers:{
    setPosts:(state,action)=>{
      state.apiStatus=action.payload.apiStatus;
      state.data=action.payload.data;
    },
    addNewPost:(state,action)=>{
      state.data.push(action.payload);
    }
  }
})
export const {setUserInfo,commentIncrement}=userInfoSlice.actions;
export const {setPosts,addNewPost}=postSlice.actions
const store = configureStore({ reducer: {
  user:userInfoSlice.reducer,
  post:postSlice.reducer,
} });
export default store;
