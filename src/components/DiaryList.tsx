import { FC } from "react"
import Image from "next/image";
import styles from "../styles/components/DiaryList.module.scss";

type diaryListProps = {
  diary: string;
  index: number;
}

export const DiaryList: FC<diaryListProps> = ({diary, index}) => {
  return (
    <div className={diary.length === 0 ? styles.nonStyle : ""}>
      <div className={styles.container}>
        <div className={styles.text}>{diary}</div>
        <div className={styles.heartIcon}>
          <Image src="/icon/heart.svg" width={40} height={60} alt="ハートの画像" className={styles.heart} />
        </div>
      </div>
    </div>
  )
}