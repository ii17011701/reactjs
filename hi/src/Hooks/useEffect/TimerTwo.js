// import React, { useState, useEffect } from 'react';
// import './TimerTwo.css';

// const TimerComponent = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//       }, 1000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isRunning, seconds]);

//   const handleStart = () => {
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   return (
//     <div className="timer-container">
//       <h1 className="timer-title">Timer</h1>
//       <p className="timer-text">Seconds: {seconds}</p>
//       <div className="timer-buttons">
//         <button className="start-button" onClick={handleStart} disabled={isRunning}>Start</button>
//         <button className="stop-button" onClick={handleStop} disabled={!isRunning}>Stop</button>
//       </div>
//     </div>
//   );
// };

// export default TimerComponent;









import React, { useState, useEffect } from 'react';
import './TimerTwo.css';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-title">Timer</h1>
      <p className="timer-text">Seconds: {seconds}</p>
      <div className="timer-buttons">
        <button className="start-button" onClick={handleStart} disabled={isRunning}>Start</button>
        <button className="stop-button" onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TimerComponent;
