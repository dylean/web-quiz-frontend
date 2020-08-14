import React from "react";
import { Link } from "react-router-dom";
import './header.less'

const Header = () => {
  return (
    <div className="header">
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="cal-link" to="/calculator">
        在线计算器
      </Link>
      <Link className="timer-link" to="/timer">
        在线倒计时器
      </Link>
    </div>
  );
};

export default Header;
