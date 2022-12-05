import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { PresentList } from "../components/PresentList";
import styles from "../styles/pages/Present.module.scss";

const Present: NextPage = () => {
  return (
    <Layout>
      <div className={styles.background}>
        <h1 className={styles.title}>プレゼントを贈る</h1>
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
