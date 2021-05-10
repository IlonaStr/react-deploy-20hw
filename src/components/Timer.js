import React, { useState, useEffect } from "react";

function timeConvertation(measure) {
  const mins = Math.floor(measure / 60000);
  const secs = (
    "0" +
    (measure / 1000 - Math.floor(measure / 60000) * 60)
  ).substr(-2);
  return mins + ":" + secs;
}

const Timer = (props) => {
  const [time, timeSetter] = useState(props.time);
  const [isStart, startSetter] = useState(props.autostart);

  useEffect(() => {
    const Counting = setInterval(() => {
      if (isStart && time > 0) {
        timeSetter(time - props.step);
        props.onTick(timeConvertation(time - props.step));
      } else if (isStart && time === 0) {
        timeSetter(time);
      } else if (!isStart && time === 0) {
        timeSetter(props.time);
      } else {
        timeSetter(time);
      }
    }, props.step);
    return () => {
      clearInterval(Counting);
    };
  }, [time, isStart, props]);

  const stopAndContinue = () => {
    isStart ? startSetter(false) : startSetter(true);
  };

  return (
    <div className="timer-cover">
      <div className="timer-display">
        <div>{timeConvertation(time)}</div>
      </div>
      <div>
        <button onClick={stopAndContinue}>{isStart ? "Stop" : "Start"}</button>
      </div>
    </div>
  );
};

export default Timer;
