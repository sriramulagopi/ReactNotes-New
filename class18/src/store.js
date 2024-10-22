import { configureStore, createSlice} from "@reduxjs/toolkit";
import Followers from "./followers";
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
const connections = createSlice({
  name:"connections",
  initialState:{followers:{
    apiStatus:ApiStatus.init,
    users:[]
  },following:{
    apiStatus:ApiStatus.init,
    users:[]
  },suggestions:{
    apiStatus:ApiStatus.init,
    users:[]
  },
  pendingConnections:{

  }
},
  reducers:{
    updateFollowers:(state,action)=>{
      state.followers=action.payload;
    },
    updateSuggestions:(state,action)=>{
      state.suggestions=action.payload;
    },
    updateFollowing:(state,action)=>{
      state.followers=action.payload;
    }
    ,addPendingConnection:(state,action)=>{
      state.pendingConnections[action.payload]=true;
    },
    removePendingConnections:(state,action)=>{
      delete state.pendingConnections[action.payload];
    },
    updateFollowStatusInsuggestions:(state,action)=>{
      const targetUser = state.suggestions.users?.find(u=>u._id===action.payload.userId);
      targetUser.following=action.payload.status;
    }
  }
})
export const {updateFollowers,updateFollowing,updateSuggestions,removePendingConnections,addPendingConnection,updateFollowStatusInsuggestions} = connections.actions;
export const {setUserInfo,commentIncrement}=userInfoSlice.actions;
export const {setPosts,addNewPost}=postSlice.actions;
const store = configureStore({ reducer: {
  user:userInfoSlice.reducer,
  post:postSlice.reducer,
  connections:connections.reducer,
} });
export default store;
