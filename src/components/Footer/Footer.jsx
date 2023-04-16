import React from "react";
import { FooterWrapper } from "./Footer.styled";
import { ImCodepen, ImGithub, ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="social">
        <span className="li">
          <Link to={"https://twitter.com/highflyer910"} />
          <ImInstagram />
        </span>
        <span className="li">
          <Link to={"https://github.com/highflyer910"} />
          <ImGithub />
        </span>
        <span className="li">
          <Link to={"https://www.linkedin.com/in/teonamushambadze"} />
          <ImCodepen />
        </span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
