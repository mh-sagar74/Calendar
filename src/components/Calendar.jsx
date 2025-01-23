import { useState } from "react";
import styles from "./calendar.module.css";
import January from "./January";
import February from "./February";
import March from "./March";
import April from "./April";
import May from "./May";
import June from "./June";
import July from "./July";
import August from "./August";
import September from "./September";
import October from "./October";
import November from "./November";
import December from "./December";
import Footer from "./Footer";

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
          <January />
          <February />
          <March />
          <April />
          <May />
          <June />
          <July />
          <August />
          <September />
          <October />
          <November />
          <December />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
