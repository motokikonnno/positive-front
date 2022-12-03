import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { DiaryList } from "../components/DiaryList";
import { Layout } from "../components/Layout";
import { Modal } from "../components/Modal";
import { TextArea } from "../components/TextArea";
import styles from "../styles/pages/Diary.module.scss";

const Diary: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [diaries, setDiary] = useState([""]);
  const [isVisible, setVisible] = useState(false);

  const handleChange = (e: string) => {
    setValue(e);
  };

  const createDiary = () => {
    setDiary([...diaries, value]);
    setValue("");
    handleClose();
  };

  const handleClose = () => {
    setVisible(!isVisible);
  };

  return (
    <Layout>
      <div className={styles.background}>
        <h2 className={styles.title}>ポジティブ日記</h2>
        <div className={styles.addButton} onClick={handleClose}>
          <Image
            src="/icon/plus-white.svg"
            width={30}
            height={30}
            alt="プラスアイコン"
          />
        </div>
        {isVisible === true ? (
          <Modal isVisible={isVisible} handleClose={handleClose}>
            <div className={styles.closeIcon} onClick={handleClose}>
              <Image
                src="/icon/xmark.svg"
                width={30}
                height={30}
                alt="閉じるアイコン"
              />
            </div>
            <div className={styles.textAreaContainer}>
              <TextArea value={value} handleChange={handleChange} />
              <div className={styles.addButton} onClick={createDiary}>
                追加
              </div>
            </div>
          </Modal>
        ) : (
          ""
        )}
        {diaries.map((diary) => {
          return <DiaryList diary={diary} key={diary} />;
        })}
        {diaries.length !== 1 ? (
          <div className={styles.saveButton}>保存</div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.advise}>
        <Image
          src="/icon/question.svg"
          width={25}
          height={25}
          alt="クエッションマークの画像"
          className={styles.questionIcon}
        />
        ヘルプ
      </div>
    </Layout>
  );
};

export default Diary;
