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
  },
});
const postSlice = createSlice({
  name:"Posts",
  initialState:{apiStatus:"init",data:[]},
  reducers:{
    setPosts:(state,action)=>{
      state.apiStatus=action.payload.apiStatus;
      state.data=action.payload.data;
    }
  }
})
export const {setUserInfo}=userInfoSlice.actions;
export const {setPosts}=postSlice.actions
const store = configureStore({ reducer: {
  user:userInfoSlice.reducer,
  post:postSlice.reducer,
} });
export default store;
