import React from "react";
import { HomeWrapper } from "./Home.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <section className="home">
        {/* <div className="widget-effect">
          <div className="fade-box"></div>
          <div className="reveal"></div>
          <div className="reveal--front">
            <div className="time_wrapper">
              <span className="text_color" id="time"></span>
              <span className="text_color" id="sec"></span>
              <span className="text_color" id="mid"></span>
            </div>
            <div className="day_wrapper">
              <span className="text_color">SUN</span>
              <span className="text_color">MON</span>
              <span className="text_color">TUE</span>
              <span className="text_color">WED</span>
              <span className="text_color">THU</span>
              <span className="text_color">FRI</span>
              <span className="text_color">SAT</span>
            </div>
            <span className="text_color" id="showDate"></span>
          </div>

          <div className="reveal__circle"></div>
        </div> */}
        <div className="c-phrase words-con">
          <span className="pick">Pick,&nbsp; </span>
          <span className="cc-text"> Customize,&nbsp;</span>
          <span className="sink"> Stick&nbsp;</span>
        </div>
      </section>
    </HomeWrapper>
  );
};

export default Home;
