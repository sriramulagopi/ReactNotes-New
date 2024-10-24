import { configureStore, createSlice } from "@reduxjs/toolkit";
const reducer1 = createSlice({
  name: "login/singup",
  initialState: { apiStatus: "init" },
  reducers: {
    loginStatus: (state, action) => {
      return (state = action.payload);
    },
  },
});
const reducer2 = createSlice({
  name: "userInfo",
  initialState: {
    userDetails: { apiStatus: "init", data: null },
    userPosts: { apiStatus: "init", data: null },
    comments:{postId:null,data:[]}
  },
  reducers: {
    userData: function(state, action){
      state.userDetails = action.payload;
    },
    userData2: function(state, action){
      state.userPosts = action.payload;
    },
    addComment: function(state,action){
        state.userPosts.data.push(action.payload.post);
        state.userDetails.data.posts++;
    },
    addcomments2:(state,action)=>{
      state.comments.postId=action.payload.postId;
      state.comments.data=action.payload.data.comments;
    }
  },
});
export const { loginStatus } = reducer1.actions;
export const { userData,userData2,addComment,addcomments2 } = reducer2.actions;
const store = configureStore({
  reducer: {
    a: reducer1.reducer,
    b: reducer2.reducer,
  },
});
export default store;
