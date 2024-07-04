import React from "react";
import "../assets/styles/pages/About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutimg from "../assets/image/about.jpg";
function About() {
  return (
    <div className="about">
      <Header></Header>
      <div className="about-content">
        <div className="about_intro">
          <div className="first">歡迎來到我們的寵物飼料比對網站！</div>
          <div className="content">
            我們深知您的寵物是家庭的一部分，因此選擇合適的飼料對牠們的健康和幸福至關重要。
            我們的網站專為那些想要為他們的寵物找到最合適飼料的主人而設計，提供一個簡單而有效的比對平台。
            <br></br>
            <br></br>
            我們致力於幫助每一位寵物主人找到最適合他們寶貝的飼料。我們相信，良好的營養是寵物健康生活的基礎，而我們的比對平台正是為此而生。
            我們希望通過提供專業、全面的飼料信息，讓每一位寵物主人都能做出明智的選擇，給予他們的寵物最好的照顧
          </div>
        </div>
        <img src={aboutimg} alt="about"></img>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
