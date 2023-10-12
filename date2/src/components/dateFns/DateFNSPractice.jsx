import React, { useState, useEffect } from 'react';
import './DateFNSPractice.css'
import DateFNSPCalandar from './DateFNSCalandar'
import { format, compareAsc, parse } from 'date-fns';
import { addDays, addMonths, addYears, subDays, subMonths, subYears } from 'date-fns';
import { differenceInDays, isBefore, isAfter } from 'date-fns';
import kor from 'date-fns/locale/ko';

export default function DateFNSPractice(props) {
    // npm install date-fns date-fns-tz {--no-audit}
    const className = props.className;

    // 1. currDate 객체와 setInterval 함수를 이용한 시계 표현
    const [currDate, setCurrDate] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrDate(new Date());
        }, 1000);

        return () => {
			clearInterval(timerID);
		};
    }, []);


    // 2. 특정 날짜 표현
    const fixDate = format(new Date(2023, 10, 5), "yyyy-MM-dd");


    // 3. 날짜 정렬 예제
    const dates = [
        new Date(1994, 7, 26),      // month는 index로 표기해야함. (ex. 7 >> 8월)
        new Date(2001, 5, 17),
        new Date(1992, 6, 15),
        new Date(2014, 11, 23),
    ];

    // compareAsc : 두 날짜 비교(a, b)하여 a가 b보다 이전인 경우 -1, 같을경우 0, b가 a보다 이전인 경우 1 반환
    const sortedDates = dates.sort((a, b) => compareAsc(a, b));


    // 4. parse 함수 사용
    const [dateString, setDateString] = useState("");       // input 필드 상태 관리
    const [parseDate, setParseDate] = useState(null);       // parsing된 날짜 상태 관리
    const [parseError, setParseError] = useState(null);     // 에러 상태 추가

    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setDateString(inputText);

        const isDateValid = /^\d{4}-\d{2}-\d{2}$/.test(inputText);
        if(isDateValid) {
            try {
                const parsed = parse(inputText, "yyyy-MM-dd", new Date(), {
                    useAdditionalWeekYearTokens: true,          // week 형식의 문자열 파싱 옵션(2023 W01 등)
                    useAdditionalDayOfYearTokens: true,         // day 형식의 문자열 파싱 옵션(2023 150 등)
                });
        
                setParseDate(parsed);
                setParseError(null);
                console.log("try : " + parsed);
            }
            catch(error) {
                console.log("catch");
                setParseError("유효하지 않은 날짜 형식입니다.");
                setParseDate(null);
            }
        }
        else {
            console.log("Invalid date format");
            setParseError("유효하지 않은 날짜 형식입니다.");
            setParseDate(null);
        }
    }


    // 5. 날짜연산 new Date(2021, 8, 15)
    const tempDay1 = addDays(new Date(2021, 6, 15), 7);
    const tempDay2 = addMonths(new Date(2021, 6, 15), 7);
    const tempDay3 = addYears(new Date(2021, 6, 15), 7);

    const tempDay4 = subDays(new Date(2021, 6, 15), 7);
    const tempDay5 = subMonths(new Date(2021, 6, 15), 7);
    const tempDay6 = subYears(new Date(2021, 6, 15), 7);

    const tempDay7 = differenceInDays(new Date(2023, 7, 26), new Date(2023, 6, 15));
    const before = isBefore(new Date(2023, 7, 26), new Date(2023, 6, 15));
    const after = isAfter(new Date(2023, 7, 26), new Date(2023, 6, 15));

    return (
        <div className={className} >
            <h1>Date FNS Practice</h1>

            <div>
                <h3 className="dateFNS-subhead">Date FNS 시계 표현하기</h3>
                <p className="clock"><b>{format(currDate, "yyyy.MM.dd HH:mm:ss")}</b></p>
                <br/>

                <b>특정 날짜 표현하기(fixDate){` : ` }</b> {fixDate}
            </div>

            <hr/>

            <div>
                <h3 className="dateFNS-subhead">날짜 정렬하기</h3>
                <ul>
                    { /* 정렬된 sortedDates를 list로 표현 */
                        sortedDates.map((date, index) => (
                            <li key={index}>{format(date, "yyyy년 MM월 dd일 E요일", {locale: kor})}</li>
                    ))}
                </ul>
            </div>

            <hr/>

            <div>
                <h3 className="dateFNS-subhead">parse 함수 사용하기</h3>
                <label htmlFor="dateInput">날짜를 입력하세요. (yyyy-MM-dd){` : `}</label>
                <input type="text" id="dateInput" defaultValue={dateString} onChange={handleInputChange} />
                <br/>
                {
                    parseError !== null ? (
                        <div><p style={{color: 'red'}}>{parseError}</p></div>
                    ) : (parseDate && (
                            <div>
                                <p>
                                    Parsed Date : {format(parseDate, "yyyy년 MM월 dd일 E요일", {locale : kor})}
                                </p>
                            </div>
                        ))
                }
            </div>

            <hr/>

            <div>
                <h3 className="dateFNS-subhead">날짜연산 사용하기</h3>
                2021.07.15일의 7일 더하기{` : `}{format(tempDay1, "yyyy-MM-dd")}
                <br/>
                2021.07.15일의 7월 더하기{` : `}{format(tempDay2, "yyyy-MM-dd")}
                <br/>
                2021.07.15일의 7년 더하기{` : `}{format(tempDay3, "yyyy-MM-dd")}
                <br/><br/>

                2021.07.15일의 7일 빼기{` : `}{format(tempDay4, "yyyy-MM-dd")}
                <br/>
                2021.07.15일의 7월 빼기{` : `}{format(tempDay5, "yyyy-MM-dd")}
                <br/>
                2021.07.15일의 7년 빼기{` : `}{format(tempDay6, "yyyy-MM-dd")}
                <br/><br/>

                2023.08.26, 2023.07.15일의 차이{` : `}{tempDay7}
                <br/><br/>
                
                Before, After 출력{` : `}{before + ", " + after}
            </div>

            <hr/>

            <div>
                <h3 className="dateFNS-subhead">Date FNS로 달력 만들기</h3>
                <br/>
                <DateFNSPCalandar />
            </div>


        </div>
    )
}
