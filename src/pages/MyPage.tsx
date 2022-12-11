import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../components/Layout";
import styles from "../styles/pages/MyPage.module.scss";
import { ProgressBar } from "../components/ProgressBar";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

const MyPage: NextPage = () => {
  const [step, setStep] = useState(18);
  const [isShow, setIsShow] = useState(false);

  const handleView = () => {
    setIsShow(!isShow);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.statusContainer}>
          <h1 className={styles.level}>Lv.12</h1>
          <div className={styles.point}>350pt</div>
          <div>
            <ProgressBar step={step} />
          </div>
        </div>
        <CalendarHeatmap
          startDate={new Date("2022-01-01")}
          endDate={new Date("2022-12-31")}
          values={[
            { date: "2022-12-11", count: 1 },
            { date: "2022-12-14", count: 2 },
          ]}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-github-${value.count}`;
          }}
        />
        <div className={styles.calendarButton} onClick={handleView}>
          カレンダー
        </div>
        {isShow && <div className={styles.calendarBalloon}>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" locale="ja" />
          </div>}
      </div>
    </Layout>
  );
};

export default MyPage;
