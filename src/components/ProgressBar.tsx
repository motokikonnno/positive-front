import styles from "../styles/components/ProgressBar.module.scss";
import { FC } from "react";

type StepProps = {
  step: number;
};

export const ProgressBar: FC<StepProps> = ({ step }) => {
  return (
    <>
      <div className={`${styles.progressBar} ${styles[`step_${step}`]}`}></div>
    </>
  );
};
