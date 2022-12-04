import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import styles from "../styles/pages/Pet.module.scss";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../components/Modal";

const Pet: NextPage = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(!isVisible);
  };

  const handleRandom = () => {
    handleClose();
  };

  return (
    <Layout>
      <div className={styles.background}>
        <h1 className={styles.title}>ペット</h1>
        <div className={styles.petImage}>
          <Image
            src="/negativePet.png"
            width={500}
            height={500}
            alt="ペットの画像"
          />
        </div>
        <div className={styles.addButton} onClick={handleRandom}>
          エサをあげる
        </div>
        {isVisible === true ? (
          <Modal isVisible={isVisible} handleClose={handleClose}>
            <Image
              src="/positivePet.png"
              width={100}
              height={100}
              alt="ポジティブペットの画像"
            />
          </Modal>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default Pet;
