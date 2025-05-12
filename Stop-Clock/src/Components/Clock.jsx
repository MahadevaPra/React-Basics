import { useState, useEffect } from 'react';
import './clock.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


function Timer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState({ hh: 0, mm: 0, ss: 0 });
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const hh = Math.floor(count / 3600);
    const mm = Math.floor((count % 3600) / 60);
    const ss = Math.floor(count % 60);
    setTime({ hh, mm, ss });
  }, [count]);

  const handleIntervalStart = () => setRunning(true);
  const handleIntervalPause = () => setRunning(false);
  const handleIntervalReset = () => {
    setRunning(false);
    setCount(0);
  };
  const handleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const Time = `${String(time.hh).padStart(2, '0')} : ${String(time.mm).padStart(2, '0')} : ${String(time.ss).padStart(2, '0')}`;

  return (
    <div className={`outer ${theme}`}>
      <div className='header'>
        <Link to='/'><button className={`home ${theme}`}>Home</button></Link>
        <button className='darkLight' onClick={handleTheme}>
          {theme === 'dark' ? <span className='circle'>🌙</span> : <span className='circle'>☀️</span>}
        </button>
      </div>

     <div className="content-center">
        <div className='timer'>
          <h2>{Time}</h2>
        </div>
        <div className='buttons'>
          <button className='btn btn-primary' onClick={handleIntervalStart}>Start</button>
          <button className='btn btn-danger' onClick={handleIntervalPause}>Pause</button>
          <button className='btn btn-success' onClick={handleIntervalReset}>Reset</button>
        </div>
     </div>
    </div>
  );
}

export default Timer;
