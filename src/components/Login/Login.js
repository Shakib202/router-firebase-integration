import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{margin: '20px'}}>
        <button>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" name="" id="email" />
        <br />
        <input type="password" placeholder="Password" name="" id="currentPassword" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
