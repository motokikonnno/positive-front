import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { InputSearch } from "../components/InputSearch";
import { Layout } from "../components/Layout";
import { PresentList } from "../components/PresentList";
import styles from "../styles/pages/Present.module.scss";

const Present: NextPage = () => {
  const [SearchInputText, setSearchInputText] = useState("");

  const handleChange = useCallback((e: string) => {
    setSearchInputText(e);
  }, [SearchInputText]);

  return (
    <Layout>
      <div className={styles.background}>
        <h1 className={styles.title}>プレゼントを贈る</h1>
        <div className={styles.InputSearchContainer}>
          <InputSearch handleChange={handleChange} searchInputText={SearchInputText} />
          <div className={styles.searchButton}>検索</div>
        </div>
        {Peoples.map((people) => {
          return <PresentList people={people} key={people.name} />;
        })}
      </div>
    </Layout>
  );
};

export type People = {
  name: string;
  point: string;
  level: string;
};

export const Peoples: People[] = [
  {
    name: "たけし",
    point: "367",
    level: "12",
  },
  {
    name: "まさし",
    point: "61",
    level: "2",
  },
  {
    name: "さちこ",
    point: "891",
    level: "23",
  },
  {
    name: "かずき",
    point: "1024",
    level: "27",
  },
];

export default Present;
