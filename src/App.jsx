import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Articles from "./components/pages/articles/Articles";
import { createContext, useState } from "react";
import "./App.css";

export const Context = createContext(null);

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <Context.Provider value={{ isLogin, setIsLogin }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
