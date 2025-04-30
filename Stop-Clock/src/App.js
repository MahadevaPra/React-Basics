import {useState, useEffect} from 'react';
import './App.css';

function Timer(){

  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState({hh: 0 , mm: 0, ss: 0});
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let interval = null;
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

  useEffect(()=>{
    const hh = Math.floor(count / 3600);
    const mm = Math.floor((count%3600)/60);
    const ss = Math.floor(count % 60);

    setTime({hh:hh,mm:mm,ss:ss});
  },[count]);

  const handleIntervalStart = () => {
    setRunning(true);
  }

  const handleIntervalPause = () => {
    setRunning(false);
  }

  const handleIntervalReset = () => {
    setRunning(false);
    setCount(0);
  }
  
  const handleTheme = () => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  };


  const Time = `${String(time.hh).padStart(2,'0')} : ${String(time.mm).padStart(2,'0')} : ${String(time.ss).padStart(2,'0')}`;

  return(
    <>
      <div className = {`outer ${theme}`}> 
        <button className='darkLight' onClick={handleTheme}>
          {
            theme === 'dark' ?
            <span className='circle'>Dark</span> :
            <span className='circle'>Light</span>
          }
        </button>
       <div className='timer'>
         <h2>{Time}</h2>
        </div>
        <div className='buttons'>
          <button id='start' onClick={handleIntervalStart}>Start</button>
          <button id='Pause' onClick={handleIntervalPause}>Pause</button>
          <button id='restart' onClick={handleIntervalReset}>reset</button>
        </div>
      </div>
    </>   
  );
}

export default Timer;