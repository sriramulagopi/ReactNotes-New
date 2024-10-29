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
    comments: { postId: null, data: [] },
  },
  reducers: {
    userData: function (state, action) {
      state.userDetails = action.payload;
    },
    userData2: function (state, action) {
      state.userPosts = action.payload;
    },
    addComment: function (state, action) {
      state.userPosts.data.push(action.payload.post);
      state.userDetails.data.posts++;
    },
    addcomments2: (state, action) => {
      state.comments.postId = action.payload.postId;
      state.comments.data = action.payload.data.comments;
    },
  },
});
const reducer3 = createSlice({
  name: "connections",
  initialState: {
    followers: { apiStatus: "init", data: null },
    following: { apiStatus: "init", data: null },
    suggestions: { apiStatus: "init", data: null },
    pendingConnection: {},
  },
  reducers: {
    addFollowers: (state, action) => {
      state.followers = action.payload;
    },
    addFollowing: (state, action) => {
      state.following = action.payload;
    },
    addSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    addPendingConnections: (state, action) => {
      state.pendingConnection[action.payload] = true;
    },
    removePendingConnection: (state, action) => {
      delete state.pendingConnection[action.payload];
    },
    updateFollowing: (state, action) => {
      const targetUser = state.following.data?.find(
        (u) => u._id === action.payload.userId
      );
      targetUser.following = action.payload.status;
    },
    updateSuggestions: (state, action) => {
      const targetUser = state.suggestions.data?.find(
        (u) => u._id === action.payload.userId
      );
      targetUser.following = action.payload.status;
    },
  },
});
export const {
  updateSuggestions,
  updateFollowing,
  addFollowers,
  addFollowing,
  addSuggestions,
  addPendingConnections,
  removePendingConnection,
} = reducer3.actions;
export const { loginStatus } = reducer1.actions;
export const { userData, userData2, addComment, addcomments2 } =
  reducer2.actions;
const store = configureStore({
  reducer: {
    a: reducer1.reducer,
    b: reducer2.reducer,
    c: reducer3.reducer,
  },
});
export default store;
