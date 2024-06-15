import NavBar from "./navBar/NavBar";
import { Context } from "../../App";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLogin, setIsLogin } = useContext(Context);
  return (
    <div className="background-header">
      <Link className="header-login-btn" to={"/"}>
        {isLogin ? "ATHAN" : "Login"}
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
