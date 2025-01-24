import { useState } from "react";
import styles from "./calendar.module.css";
import Footer from "./Footer";
import Month from "./month";

export default function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div>
      <div className={styles.calendar}>
        <div className={styles.header}>
          <div>Calendar</div>
          <div>{year}</div>
        </div>
        <div className={styles.monthBox}>
          <Month monthName={"January"} monthIndex={0} />
          <Month monthName={"February"} monthIndex={1} />
          <Month monthName={"March"} monthIndex={2} />
          <Month monthName={"April"} monthIndex={3} />
          <Month monthName={"May"} monthIndex={4} />
          <Month monthName={"June"} monthIndex={5} />
          <Month monthName={"July"} monthIndex={6} />
          <Month monthName={"August"} monthIndex={7} />
          <Month monthName={"September"} monthIndex={8} />
          <Month monthName={"October"} monthIndex={9} />
          <Month monthName={"November"} monthIndex={10} />
          <Month monthName={"December"} monthIndex={11} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
