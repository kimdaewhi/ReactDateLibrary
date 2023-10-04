import './App.css';
import React, { useState, useEffect }from 'react'
import MomentPractice from './components/moment/MomentPractice'
import DayJSPractice from './components/dayJs/DayJSPractice'
import DateFNSPractice from './components/dateFns/DateFNSPractice'

function App() {
  const [activeMomentJS, setActiveMomentJS] = useState(false);
  const [activeDayJS, setActiveDayJS] = useState(false);
  const [activeDateFNS, setActiveDateFNS] = useState(false);

  // useEffect(() => {;
  //   console.log("activeMomentJS : " + activeMomentJS + ", activeDayJS : " + activeDayJS + ", activeDateFNS : " + activeDateFNS)

  //   if(activeMomentJS) {
  //     setActiveDayJS(false);
  //     setActiveDateFNS(false);
  //   }
  //   else if(activeDayJS) {
  //     setActiveMomentJS(false);
  //     setActiveDateFNS(false);
  //   }
  //   else if(activeDateFNS) {
  //     setActiveMomentJS(false);
  //     setActiveDayJS(false);
  //   }
  // }, [activeMomentJS, activeDayJS, activeDateFNS]);


  const toggleMomentJS = () => {
    // console.log("activeMomentJS : " + activeMomentJS + ", activeDayJS : " + activeDayJS + ", activeDateFNS : " + activeDateFNS)

    setActiveMomentJS(!activeMomentJS);
    setActiveDayJS(false);
    setActiveDateFNS(false);
  };

  const toggleDayJS = () => {
    setActiveDayJS(!activeDayJS);
    setActiveMomentJS(false);
    setActiveDateFNS(false);
  };

  const toggleDateFNS = () => {
    setActiveDateFNS(!activeDateFNS);
    setActiveMomentJS(false);
    setActiveDayJS(false);
  };

  const Dropdown = props => {
    const [visibilityAnimation, setVisibilityAnimation] = useState(false);    // Close 시 DOM이 사라지지 않게 해주기 위한 상태

    useEffect(() => {
      if(props.visibility) {
        setVisibilityAnimation(true);
      }
      else {
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 500);      // 애니메이션에서 지정한 Interval만큼
      }
    }, [props.visibility]);

    return (
      <article className={`${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
        {visibilityAnimation && props.children}
      </article>
    );
  };

  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  return (
    <div className="App">

      {/* Moment.js 토글 */}
      <div className={`toggle${activeMomentJS ? `-active` : ``}`} style={{textAlign: "center"}} onClick={toggleMomentJS}>
        <h3>MOMENT.JS</h3>
      </div>
      {activeMomentJS && <MomentPractice className="moment-practice"/>}

      {/* Day.js 토글 */}
      <div className={`toggle${activeDayJS ? `-active` : ``}`} style={{textAlign: "center"}} onClick={toggleDayJS}>
        <h3>DAY.JS</h3>
      </div>
      {activeDayJS && <DayJSPractice />}

      {/* Date FNS 토글 */}
      <div className={`toggle${activeDateFNS ? `-active` : ``}`} style={{textAlign: "center"}} onClick={toggleDateFNS}>
        <h3>DATE FNS</h3>
      </div>
      {activeDateFNS && <DateFNSPractice />}

      <hr/>

      <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>
        { dropdownVisibility ? "Close" : "Open" }
      </button>

      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default App;
