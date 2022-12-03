import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { DiaryList } from "../components/DiaryList";
import { Layout } from "../components/Layout";
import { TextArea } from "../components/TextArea";
import styles from "../styles/pages/Diary.module.scss";

const Diary: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [diaries, setDiary] = useState([""]);

  const handleChange = (e: string) => {
    setValue(e);
  };

  const createDiary = () => {
    setDiary([...diaries, value]);
    setValue("");
  };

  return (
    <Layout>
      <div className={styles.background}>
        <h2 className={styles.title}>ポジティブ日記</h2>
        {/* <TextArea value={value} handleChange={handleChange} /> */}
        <div className={styles.addButton} onClick={createDiary}>
          追加
        </div>
        {diaries.map((diary, index) => {
          return <DiaryList diary={diary} index={index} key={diary} />;
        })}
      </div>
      <div className={styles.advise}>
        {/* <div className={styles.questionIcon}> */}
      
          <Image src="/icon/question.svg" width={25} height={25} alt="クエッションマークの画像" className={styles.questionIcon} />
       
        {/* </div> */}
        
        ヘルプ
        </div>
    </Layout>
  );
};

export default Diary;
