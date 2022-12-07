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
          <Image src="/hut.png" width={500} height={500} alt="小屋の画像" />
        </div>
        <div className={styles.addButton} onClick={handleRandom}>
          エサをあげる
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
            <div className={styles.modalContainer}>
              <div className={styles.resultText}>
                ポジティブポイントを38ポイント獲得しました！
              </div>
              <div className={styles.resultImage}>
                <Image
                  src="/positivePet.png"
                  width={300}
                  height={300}
                  alt="ポジティブペットの画像"
                />
              </div>
              <div className={styles.confirmButton} onClick={handleClose}>OK</div>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default Pet;
