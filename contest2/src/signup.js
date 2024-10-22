import { useContext } from "react";
import { AppContext } from "./Homepage";

const Signup = function () {
    const {onSubmit,state,onInput}= useContext(AppContext);
  return (
    <div className="signup">
      <form onSubmit={onSubmit} onInput={onInput}>
        <div className="head1">
            <p>Signup</p>
        </div>
        <input type="text" placeholder="Full Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
        />
        <p className="error" style={{display:state.bool1?"flex":"none"}}>Error:All the fields are mandatory</p>
        <p className="success" style={{display:state.bool2?"flex":"none"}}>Successfully Signed Up!</p>
        <p className="error" style={{display:state.bool3?"flex":"none"}}>Password and Confirm Password should be same</p>
        <button> Signup</button>
      </form>
    </div>
  );
};
export default Signup;
