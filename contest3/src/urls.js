
const baseUrl = "https://node-auth-jwt-w78c.onrender.com";
const endPoints= {
    login:`${baseUrl}/auth/login`,
    signup:`${baseUrl}/auth/signup`,
    userInfo:`${baseUrl}/user/info`,
    postsList:`${baseUrl}/post/all`,
    createPost:`${baseUrl}/post/create`,
    CommentLists:`${baseUrl}/post/comments`,
}
export default endPoints;