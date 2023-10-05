import React, { useState, useRef } from 'react'
import moment from 'moment-timezone';
import 'moment/locale/ko';
import './MomentPractice.css'; // 추가

export default function MomentPractice(props) {
    // npm install moment, moment-timezone 
    // moment-timezone은 moment.js를 확장하여 시간대 처리를 가능하게 함. 하지만 라이브러리 자체가 꽤 무거움

    /* Moment.js 대표적인 형식 패턴
        날짜 형식:
            YYYY: 연도(4자리)
            YY: 연도(2자리)
            MM: 월(01 ~ 12)
            DD: 일(01 ~ 31)

        시간 형식:
            HH: 시(00 ~ 23)
            hh: 시(01 ~ 12)
            mm: 분(00 ~ 59)
            ss: 초(00 ~ 59)
            SSS: 밀리초(0 ~ 999)

        요일 및 AM/PM 형식:
            ddd: 축약된 요일(예: "Sun", "Mon")
            dddd: 요일(예: "Sunday", "Monday")
            A: AM 또는 PM

        다양한 형식 옵션:
            Do: 일자에 서수 표현 추가 (예: "1st", "2nd")
            MMM: 축약된 월 이름(예: "Jan", "Feb")
            MMMM: 월 이름(예: "January", "February")

        날짜 및 시간 조합:
            YYYY-MM-DD: "2023-09-26"와 같은 형식
            YYYY-MM-DD HH:mm:ss: "2023-09-26 14:30:00"와 같은 형식
     */
    
    const className = props.className;

    const momentDate = moment();
    const newMomentDate = moment().add(1, "week")
    const clonenewMomentDate = newMomentDate.clone().add(1, "week")     // 객체 불변성의 원칙을 유지하기 위해 clone() 사용을 권장함

    const [day, setDay] = useState("");
    const birthdayRef = useRef(null);

    const handleBirthdayChange = (event) => {
        console.log("선택한 날짜 : " + event.target.value + ", " + "요일 : " + moment(event.target.value, "YYYY-MM-DD").format("dddd"));

        setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
    }

    return (
        <div className={className}>
            <h1>Moment.js Practice</h1>
            <div>
                <h3 style={{color: "gray"}}>불변성(Immutability) 원칙</h3>
                <b>momentDate{` : `}</b> {momentDate.format()}
                <br/>
                <b>momentDate {` : `}</b> {newMomentDate.format('YYYY-MM-DD HH:mm:ss')}
                <br/>
                <b>clonenewMomentDate {` : `}</b> {clonenewMomentDate.format('YYYY-MM-DD HH:mm:ss')}
            </div>

            <hr/>

            <div>
                <h3 style={{color: "gray"}}>Summer Time (New-york)</h3>
                <b>2018년 3월10일 13시에 1일 더하기{' : '}</b> {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format('YYYY-MM-DD HH:mm:ss')}
                <br/>
                <b>2018년 3월10일 13시에 24시간 더하기{' : '}</b> {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format('YYYY-MM-DD HH:mm:ss')}
            </div>

            <hr/>

            <div>
                <h3 style={{color: "gray"}}>Leap Year(Korea)</h3>
                <b>2017년 1월 1일에 1년 빼기{' : '}</b> {moment("2017-01-01").subtract(1, "year").format('YYYY-MM-DD HH:mm:ss')}
                <br/>
                <b>2017년 1월 1일에 365일 빼기{' : '}</b> {moment("2017-01-01").subtract(365, "day").format('YYYY-MM-DD HH:mm:ss')}
            </div>

            <hr/>

            <div>
                <h3 style={{color: "gray"}}>한국어로 표기하기 07-17-2021</h3>
                {moment("07-17-2021").format("YYYY년 MM월 DD일")}
            </div>

            <hr/>

            <div>
                <h3 style={{color: "gray"}}>자기 생일 요일 찾기</h3>
                <input type="date" ref={birthdayRef} onChange={handleBirthdayChange}/>
                <br/>
                <b>요일 {` : `}</b>{day}
            </div>

            <hr/>

            <div>
                <h3 style={{color: "gray"}}>두 날짜 비교</h3>
                <b>2021-07-17 03:00 와 2021-07-18 02:00는 몇 시간 차이인가?{' : '}</b> {moment("2021-07-17 03:00:00").diff(moment("2021-07-18 02:00:00"), "hour")}{`시간`}
            </div>
        </div>
    )
}   
