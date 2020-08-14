import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./timer.less";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [end, setEnd] = useState(0);
  const [inputtime, setInputtime] = useState(0);
  useEffect(() => {
    if (end === 2) {
      for (let i = 1; i < 1000; i++) {
        clearInterval(i);
      }
    }
  }, [end]);
  return (
    <div className="timer">
      <h1>在线倒计时器</h1>
      <div className="timerInside">
        <div className="timerInput">
          <label>设置时间</label>
          <input
            className="inputSeconds"
            type="text"
            value={inputtime}
            onChange={(e) => setInputtime(e.target.value)}
          />
          <input
            className="startButton"
            type="button"
            value="Start"
            disabled={end === 1 || inputtime <= 0}
            onClick={() => {
              setTime(inputtime);
              setEnd(1);
              let t = inputtime;
              setInterval(() => {
                t--;
                setTime(t);
                if (t === 0) {
                  setEnd(2);
                }
              }, 1000);
            }}
          />
        </div>
        <input
          type="text"
          className="timerScreen"
          readOnly
          value={end === 0 ? "start" : end === 1 ? `${time} Seconds` : "end"}
        />
      </div>
      <Link className="link" to="/">
        回到主页
      </Link>
    </div>
  );
};

export default Timer;
