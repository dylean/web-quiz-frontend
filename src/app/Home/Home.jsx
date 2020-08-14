import React from "react";
import "./home.less";
import { Link } from "react-router-dom";
import backGroundURL from "../../images/hero-image.png";
import calculatorURL from "../../images/calculator.png";
import timerURL from "../../images/timer.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-above">
        <h1>在线实用工具</h1>
        <img src={backGroundURL} alt="" className="back-ground-img" />
      </div>
      <div className="home-below">
        <img src={calculatorURL} alt="" className="cal-img" />
        <img src={timerURL} alt="" className="timer-img" />
        <div className="link-icon">
          <Link className="cal-icon" to="/calculator">
            计算器
          </Link>
          <Link className="timer-icon" to="/timer">
            倒计时器
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
