import React, { useState, useRef } from 'react'
import moment from 'moment-timezone';
import 'moment/locale/ko';

export default function MomentExam() {
    const [day, setDay] = useState("");
    const birthdayRef = useRef(null);

    const momentDate = moment();
    const newMomentDate = momentDate.add(1, "week");
    const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

    const handleBirthdayChange = (event) => {
        setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
    };

    return (
        <div>
            <h1>MomentExam</h1>

            <div><b>Mutable Check</b></div>
            <div>
                {momentDate.format()}
                <br/>
                {newMomentDate.format()}
                <br/>
                {cloneNewMomentDate.format()}
                
            </div>

            <br/>

            <div><b>Summer Time (New-york)</b></div>
            <div>
                2018년 3월10일 13시에 1일 더하기 : {' '}
                {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
            </div>
            <div>
                2018년 3월10일 13시에 24시간 더하기 : {' '}
                {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
            </div>

            <br/>

            <div><b>Leap Year(Korea)</b></div>
            <div>
                2017년 1월 1일에 1년 빼기 : {' '}
                {moment("2017-01-01").subtract(1, "year").format()}
            </div>

            <div>
                2017년 1월 1일에 365일 빼기 : {' '}
                {moment("2017-01-01").subtract(365, "day").format()}
            </div>

            <br/>

            <div><b>한국어로 표기하기 07-17-2021</b></div>
            <div>
                {moment("07-17-2021").format("YYYY년 MM월 DD일")}
            </div>

            <br/>

            <div><b>자기 생일 요일 찾기</b></div>
            <div>
                <input type="date" ref={birthdayRef} onChange={handleBirthdayChange}/>
                <div>{day}</div>
            </div>

            <br/>

            <div><b>두 날짜 비교</b></div>
            <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇 시간 차이인가?</div>
            <div>{moment("2021-07-17 03:00:00").diff(moment("2021-07-18 02:00:00"), "hour")}{`시간`}</div>
        </div>
    )
}
