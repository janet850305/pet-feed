import React from "react";
import "../assets/styles/components/Footer.css";
import facebook from "../assets/image/facebook.jpg";
import instagram from "../assets/image/instagram.jpg";
import twitter from "../assets/image/twitter.jpg";
function Footer() {
  return (
    <div className="footer">
      <div>
        <span className="footer_title">Contact information</span>
      </div>
      <hr></hr>
      <div className="information">
        <div className="phone">
          <span>PHONE</span>
          <p>(123)456-7890</p>
        </div>
        <div className="email">
          <span>EMAIL</span>
          <p>hello@petfeed.com</p>
        </div>
        <div className="social">
          <span>SOCIAL</span>
          <div className="social_img">
            <img src={facebook} alt="facebook"></img>
            <img src={twitter} alt="twitter"></img>
            <img src={instagram} alt="instagram"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
