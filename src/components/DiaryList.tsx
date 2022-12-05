import { FC } from "react";
import Image from "next/image";
import styles from "../styles/components/DiaryList.module.scss";

type diaryListProps = {
  diary: string;
};

export const DiaryList: FC<diaryListProps> = ({ diary }) => {

  return (
    <div className={diary.length === 0 ? styles.nonStyle : ""}>
      <div className={styles.container}>
        <div className={styles.text}>{diary}</div>
        <div className={styles.xmarkIcon}>
          <Image
            src="/icon/xmark.svg"
            width={40}
            height={40}
            alt="ハートの画像"
          />
        </div>
      </div>
    </div>
  );
};
