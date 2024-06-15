import { useContext } from "react";
import { Context } from "../../../App";
import Login from "./login/Login";

const Home = () => {
  const { isLogin, setIsLogin } = useContext(Context);
  if (isLogin) {
    return <h3>Welcome... You Logged in</h3>;
  } else {
    return <Login />;
  }
};

export default Home;
