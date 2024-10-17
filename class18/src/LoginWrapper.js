import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Signup from "./Singup.js";
// import Login from "./Login.js";
import { lazy, Suspense } from "react";
const Login = lazy(()=>import("./Login.js"));
const Singup = lazy(()=>import("./Singup.js"))
const LoginWrapper = function () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Suspense fallback={<h1>Loading</h1>}><Login/></Suspense>}/>
          <Route path="signup" element={<Suspense fallback={<h1>Loading</h1>}><Singup/></Suspense>}/>
          <Route path="*" element={<div>
            <h1>Your are not trying to looking this page</h1>
            <h4>Navigate to <Link to="/login">Login</Link> Page</h4>
          </div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default LoginWrapper;
