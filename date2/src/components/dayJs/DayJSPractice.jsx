import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

export default function DayJSPractice() {
	const [currTime, setCurrTime] = useState(dayjs());
	const fixedDate = dayjs("2023-10-02 07:01:42");

	useEffect(() => {
		const timerID = setInterval(() => {
			setCurrTime(dayjs());
		}, 1000);

		return () => {
			clearInterval(timerID);
		};
	}, []); 


	const date1 = dayjs("2021-10-11 10:30:25.495", "YYYY-MM-DD HH:mm:ss.SSS");
	const date2 = dayjs("2020-04-08 13:25:30.000", "YYYY-MM-DD HH:mm:ss.SSS");

	return (
		<div style={{marginLeft: "7px", border: "solid 0.5px lightgray", paddingLeft: "7px"}}>
			<h1>Day.js Practice</h1>
			
			<div>
				<h3 style={{color: "gray"}}>Day.JS 현재 날짜 및 시간 가져오기</h3>
				<p>{currTime.format("YYYY-MM-DD HH:mm:ss")}</p>
				{/* 마지막에 format 안써주면 에러남!!! 반드시 format 지정해줄 것! */}
				<b>기준일(2023.10.01)에서 7일 더하기{` : `}</b> {fixedDate.add(7, "days").format("YYYY-MM-DD HH:mm:ss")}
				<br/><br/>
				<b>기준일(2023.10.01)의 시간 단위 구하기</b><br/>
				연{` : `}{fixedDate.get("year")}<br/>
				{/* 월이 9가 나오는 이유는 Day.js의 get함수는 해당 달의 숫자를 반환하는 것이 아닌 월의 인덱스를 반환하기 때문 */}
				월{` : `}{fixedDate.get("month")}<br/>
				일{` : `}{fixedDate.get("date")}<br/>
			</div>

			<hr/>

			<div>
				<h3 style={{color: "gray"}}>날짜 및 시간 차이 구하기 diff()</h3>
				<b>2021년 10월 11일과 2020년 04월 08일의 차이{` : `}</b><br/>
				연{` : `}{date1.diff(date2, "year")}<br/>
				월{` : `}{date1.diff(date2, "month")}<br/>
				주{` : `}{date1.diff(date2, "week")}<br/>
				일{` : `}{date1.diff(date2, "date")}<br/>
			</div>
		</div>
	)
}
