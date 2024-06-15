import { useContext } from "react";
import { Context } from "../../../App";

const Articles = () => {
  const { isLogin } = useContext(Context);

  if (isLogin) {
    return (
      <div className="articles-container">
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
        <div className="article">Article</div>
      </div>
    );
  } else {
    return <h3>Please Login and Comeback here to Show Articles</h3>;
  }
};

export default Articles;
