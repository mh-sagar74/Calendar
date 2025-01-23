import { useState } from "react";
import styles from "./june.module.css";
import { useEffect } from "react";

export default function June() {
  const [currDate, setCurDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDay, setStartDay] = useState(0);

  const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  useEffect(() => {
    const year = currDate.getFullYear();
    const firstDate = new Date(year, 5, 1);
    const days = [];

    while (firstDate.getMonth() === 5) {
      days.push(new Date(firstDate));
      firstDate.setDate(firstDate.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDay(new Date(year, 5, 1).getDay());
  }, [currDate]);

  return (
    <div className={styles.june}>
      <div className={styles.header}>
        <div>June</div>
      </div>
      <div className={styles.weekBox}>
        {daysName.map((weekDay) => (
          <div className={styles.week} key={weekDay}>
            {weekDay}
          </div>
        ))}
      </div>
      <div className={styles.dayBox}>
        {Array.from({ length: startDay }).map((_, index) => (
          <div className={styles.empty} key={index}></div>
        ))}
        {daysInMonth.map((day) => (
          <div
            className={`${
              day.getDate() === new Date().getDate() &&
              day.getMonth() === new Date().getMonth()
                ? styles.cDay
                : styles.day
            }`}
            key={day}>
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}
