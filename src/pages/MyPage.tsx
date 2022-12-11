import type { NextPage } from "next";
import { FC, useState } from "react";
import { Layout } from "../components/Layout";
import styles from "../styles/pages/MyPage.module.scss";
import { ProgressBar } from "../components/ProgressBar";

const MyPage: NextPage = () => {
  const [step, setStep] = useState(18);

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
      </div>
    </Layout>
  );
};

export default MyPage;
