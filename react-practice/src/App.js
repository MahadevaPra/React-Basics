import {useState, useEffect} from 'react'

function Timer(){

  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  let interval = null;

  useEffect(() => {
    if(running){
    interval = setInterval(() => {
      setCount(prev => prev + 1)
    },1000)
    }
    else{
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  },[running]);

  const handleIntervalStart = () => {
    setRunning(true);
  }

  const handleIntervalStop = () => {
    setRunning(false);
  }

  const handleIntervalReset = () => {
    setRunning(false);
    setCount(0);
  }

  return(
    <>
      <h2>Time : {count} Seconds</h2>
      <button onClick={handleIntervalStart}>Start</button>
      <button onClick={handleIntervalStop}>Stop</button>
      <button onClick={handleIntervalReset}>reset</button>
    </>   
  );
}

export default Timer;