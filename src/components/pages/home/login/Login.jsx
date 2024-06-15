import { Context } from "../../../../App";
import React, { useContext } from "react";

const Login = () => {
  const { isLogin, setIsLogin } = useContext(Context);

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={() => setIsLogin(true)}>
          <h4>Login</h4>
          <input type="text" placeholder="User Name" className="text-input" />
          <input type="text" placeholder="Password" className="text-input" />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
