import Image from "next/image";
import styles from "../styles/components/Qa.module.scss";
import React, { useState } from "react";
import { Question } from "../pages/index";

export type QuestionProps = {
  qa: Question;
}

export const Qa: React.FC<QuestionProps> = ({qa}) => {
  const [active, setActive] = useState(false);

  const getToggle = () => {
    setActive(!active);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <div>
          <span className={styles.questionIcon}>Q</span>{qa.question}
        </div>
        <div className={active ? styles.toggleIcon : ""} onClick={getToggle}>
          <Image
            src="/icon/plus.svg"
            className={styles.plusIcon}
            width={25}
            height={25}
            alt="プラスアイコン"
          />
        </div>
        <div className={active ? "" : styles.toggleIcon} onClick={getToggle}>
          <Image
            src="/icon/minus.svg"
            className={styles.minusIcon}
            width={25}
            height={25}
            alt="マイナスアイコン"
          />
        </div>
      </div>
      <div className={active ? "" : styles.toggleAnswer}>
        <div className={styles.answerContainer}>
          <span className={styles.answerIcon}>A</span>
          {qa.answer}
        </div>
      </div>
    </div>
  );
};
