import { FC, useState } from "react";
import Image from "next/image";
import styles from "../styles/components/PresentList.module.scss";

type PresentProps = {
  people: {
    name: string;
    point: string;
    level: string;
  };
};

export const PresentList: FC<PresentProps> = ({ people }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleDisable = () => {
    setIsToggle(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.name}>{people.name}</div>
      <div className={styles.point}>{people.point}pt</div>
      <div className={styles.level}>
        <div>
          <Image src="/icon/crown.svg" width={20} height={20} alt="王冠のアイコン" />
        </div>
        Lv.{people.level}
      </div>
      <div className={isToggle ? styles.giftIconDisable : styles.giftIcon} onClick={handleDisable}>
        <Image
          src="/icon/gift.svg"
          width={30}
          height={30}
          alt="ギフトアイコン"
        />
      </div>
    </div>
  );
};
