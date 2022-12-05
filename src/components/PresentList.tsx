import { FC } from "react";
import { People } from "../pages/Present";
import styles from "../styles/components/PresentList.module.scss";

type PresentProps = {
  people: {
    name: string;
    point: string;
    level: string;
  };
};

export const PresentList: FC<PresentProps> = ({ people }) => {
  return (
    <>
      <div className={styles.container}>
        <div>{people.name}</div>
        <div>{people.point}</div>
        <div>{people.level}</div>
      </div>
    </>
  );
};
