import type { NextPage } from "next";
import Image from "next/image";
import { useState, useCallback } from "react";
import { DiaryList } from "../components/DiaryList";
import { Layout } from "../components/Layout";
import { Modal } from "../components/Modal";
import { TextArea } from "../components/TextArea";
import styles from "../styles/pages/Diary.module.scss";

const Diary: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [diaries, setDiary] = useState([""]);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
    (e: string) => {
      setValue(e);
    },
    [value]
  );

  const createDiary = useCallback(() => {
    setDiary([...diaries, value]);
    setValue("");
    handleClose();
  }, [diaries, value]);

  const handleClose = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const handleSave = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Layout>
      <div className={styles.background}>
        <h1 className={styles.title}>ポジティブ日記</h1>
        <div className={styles.textAreaContainer}>
          <TextArea value={value} handleChange={handleChange} />
          <div className={styles.addButton} onClick={createDiary}>
            追加
          </div>
        </div>
        <div className={styles.diaryList}>
        {diaries.map((diary) => {
          return <DiaryList diary={diary} key={diary} />;
        })}
        </div>
        {diaries.length !== 1 && (
          <div className={styles.saveButton} onClick={handleSave}>
            保存
          </div>
        )}
        <div className={styles.help}>
          <Image
            src="/icon/question.svg"
            width={25}
            height={25}
            alt="クエッションマークの画像"
            className={styles.questionIcon}
          />
          ヘルプ
        </div>
      </div>
      {isOpen && (
        <Modal isVisible={isOpen} handleClose={handleSave}>
          <div className={styles.confirmContainer}>
            <div className={styles.saveText}>保存しますか？</div>
            <div className={styles.getPointText}>30pt獲得できます</div>
            <div className={styles.buttonContainer}>
              <div className={styles.confirmButton}>はい</div>
              <div className={styles.confirmButton} onClick={handleSave}>
                戻る
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default Diary;
