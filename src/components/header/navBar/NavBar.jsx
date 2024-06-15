import { Link } from "react-router-dom";
import { Context } from "../../../App";
import React, { useContext } from "react";

const NavBar = () => {
  const { isLogin, setIsLogin } = useContext(Context);
  return (
    <div>
      <nav>
        <ul className="header-btns">
          <li className="logout-btn" onClick={() => setIsLogin(false)}>
            Logout
          </li>
          <li>
            <Link to={"/articles"} className="articles-btn">
              Articles
            </Link>
          </li>
          <li>
            <Link to={"/"} className="home-btn">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
