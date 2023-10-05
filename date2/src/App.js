import './App.css';
import React, { useState, useEffect, useRef }from 'react'
import MomentPractice from './components/moment/MomentPractice'
import DayJSPractice from './components/dayJs/DayJSPractice'
import DateFNSPractice from './components/dateFns/DateFNSPractice'

function App() {
  const [activeMomentJS, setActiveMomentJS] = useState(false);
  const [activeDayJS, setActiveDayJS] = useState(false);
  const [activeDateFNS, setActiveDateFNS] = useState(false);

  const momentRef = useRef(null);

  useEffect(() => {

  }, [activeMomentJS, activeDayJS, activeDateFNS]);

  const MomentJSClickHandler = () => {
    setActiveMomentJS(!activeMomentJS);
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
      <div className="division" style={{textAlign: "center"}} onClick={MomentJSClickHandler}>
        <h3>MOMENT.JS</h3>
      </div>
      {/* activeMomentJS && <MomentPractice /> */}
      <MomentPractice className={`${activeMomentJS ? 'moment' : 'moment active'}`} ref={momentRef}/>

      {/* Day.js 토글 */}
      <div className="division" style={{textAlign: "center"}} onClick={() => setActiveDayJS(!activeDayJS)}>
        <h3>DAY.JS</h3>
      </div>
      {activeDayJS && <DayJSPractice />}

      {/* Date FNS 토글 */}
      <div className="division" style={{textAlign: "center"}} onClick={() => setActiveDateFNS(!activeDateFNS)}>
        <h3>DATE FNS</h3>
      </div>
      {activeDateFNS && <DateFNSPractice />}

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
