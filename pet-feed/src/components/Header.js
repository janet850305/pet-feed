import React from "react";

import myimage from "../assets/image/logo.jpg";
import { useNavigate } from "react-router-dom";
import "../assets/styles/components/Header.css";
function Header() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToAbout = () => {
    navigate("/About");
  };
  const navigateToCompare = () => {
    navigate("/compare");
  };
  return (
    <div className="header">
      <div className="header-title">
        <img src={myimage} alt="description" />
        <div className="buttons">
          <button className="headerbutton" onClick={navigateToHome}>
            首頁
          </button>
          <button className="headerbutton" onClick={navigateToAbout}>
            關於
          </button>
          <button className="headerbutton" onClick={navigateToCompare}>
            比較
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Header;
