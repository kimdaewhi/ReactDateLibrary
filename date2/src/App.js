import './App.css';
import React, { useState, useEffect, useRef }from 'react'
import MomentPractice from './components/moment/MomentPractice'
import DayJSPractice from './components/dayJs/DayJSPractice'
import DateFNSPractice from './components/dateFns/DateFNSPractice'

function App() {
  const [activeMomentJS, setActiveMomentJS] = useState(true);
  const [activeDayJS, setActiveDayJS] = useState(true);
  const [activeDateFNS, setActiveDateFNS] = useState(true);

  useEffect(() => {

  }, [activeMomentJS, activeDayJS, activeDateFNS]);

  const handleMomentJS = () => {
    setActiveMomentJS(!activeMomentJS);
  }

  const handleDayJS = () => {
    setActiveDayJS(!activeDayJS);
  }

  const handleDateFNS = () => {
    setActiveDateFNS(!activeDateFNS);
  }


  /* ========================== TEST ==========================*/
  const [testFlag, setTestFlag] = useState(false);
  const testRef = useRef(null);

  const testDivHandler = () => {
    setTestFlag(!testFlag);
  };
  /* ========================================================== */
  
  return (
    <div className="App">

      {/* Moment.js 토글 */}
      <div className="division" onClick={handleMomentJS}>
        <h3>MOMENT.JS</h3>
      </div>
      <MomentPractice className={`${activeMomentJS ? 'moment' : 'moment active'}`}/>

      {/* Day.js 토글 */}
      <div className="division" onClick={handleDayJS}>
        <h3>DAY.JS</h3>
      </div>
      <DayJSPractice className={`${activeDayJS ? 'dayjs' : 'dayjs active'}`} />

      {/* Date FNS 토글 */}
      <div className="division" onClick={handleDateFNS}>
        <h3>DATE FNS</h3>
      </div>
      <DateFNSPractice className={`${activeDateFNS ? 'dateFNS' : 'dateFNS active'}`} />

      <hr/>
      
      {/* ========================== TEST ==========================*/}
      <button className="active-button" style={{margin: "5px"}} onClick={testDivHandler}>TEST</button>
      <div className={`accordion${testFlag ? ` activeTrue` : ``}`} ref={testRef}>
      </div>
      {/* ========================================================== */}
    </div>
  );
}

export default App;
