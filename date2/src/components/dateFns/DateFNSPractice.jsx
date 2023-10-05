import React, { useState, useEffect } from 'react'
import { format, compareAsc } from 'date-fns'
import kor from 'date-fns/locale/ko'

export default function DateFNSPractice() {
    // npm install date-fns date-fns-tz {--no-audit}
    const [currDate, settCurrDate] = useState(new Date());

    // useEffect(() => {
    //     const timerID = setInterval(() => {
    //         settCurrDate(new Date());
    //     }, 1000);

    //     return () => {
	// 		clearInterval(timerID);
	// 	};
    // }, []);

    const fixDate = format(new Date(2023, 10, 5), "yyyy-MM-dd");

    // month는 index로 표기해야함. (ex. 7 >> 8월)
    const dates = [
        new Date(1994, 7, 26),
        new Date(2001, 5, 17),
        new Date(1992, 6, 15),
        new Date(2014, 11, 23),
    ]
    const sortedDates = dates.sort((a, b) => compareAsc(a, b));

    return (
        <div style={{marginLeft: "7px", border: "solid 0.5px lightgray", paddingLeft: "7px"}}>
            <h1>Date FNS Practice</h1>

            <div>
                <h3 style={{color: "gray"}}>Date FNS 현재 날짜 표현하기</h3>
                <p>{format(currDate, "yyyy-MM-dd HH:mm:ss")}</p>
                <br/>

                <b>특정 날짜 표현하기{` : ` }</b> {fixDate}
            </div>

            <hr/>

            <div>
                <b>날짜 정렬하기</b>
                <br/>
                <ul>
                    { /* 정렬된 date를 list로 표현 */
                        sortedDates.map((date, index) => (
                            <li key={index}>{format(date, "yyyy년 MM월 dd일 E요일", {locale: kor})}</li>
                    ))}
                </ul>
            </div>

            <div>
            <h3 style={{color: "gray"}}>Date FNS로 달력 만들기</h3>
            </div>
        </div>
    )
}
