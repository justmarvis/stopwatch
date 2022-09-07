import './App.css';
import {useState} from 'react';

import Start from './component/start/Start';
import Stop from './component/stop/Stop';
import Timer from './component/timer/Timer';

const App = () => {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});

  const start = () => {
    run();
    setInterval(run, 20);
  };

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 60) {
      updatedS++;
      updatedMs = 0;
    }
      updatedMs++;
      return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };
  return (
    <div className="App">
      <Timer time={time} />
      <Start start={start} />
      <div className='othr'>
        <Stop />
      </div>
    </div>
  );
}

export default App;
