import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { TextArea } from "../components/TextArea";
import styles from "../styles/pages/Diary.module.scss";

const Diary: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [thirdValue, setThirdValue] = useState<string>("");

  const handleChange = (e: string) => {
    setValue(e);
  };

  const handleChangeSecond = (e: string) => {
    setSecondValue(e);
  };

  const handleChangeThird = (e: string) => {
    setThirdValue(e);
  };

  return (
    <Layout>
      <h2 className={styles.title}>ポジティブ日記</h2>
      <div className={styles.background}>
        <TextArea value={value} handleChange={handleChange} />
        <TextArea value={secondValue} handleChange={handleChangeSecond} />
        <TextArea value={thirdValue} handleChange={handleChangeThird} />
      </div>
    </Layout>
  );
};

export default Diary;
