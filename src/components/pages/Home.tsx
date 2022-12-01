import { Question } from "../../pages";
import Image from "next/image";
import styles from "../../styles/components/pages/Home.module.scss";
import { Layout } from "../Layout";
import { Qa } from "../Qa";
import { FC } from "react";

type HomeProps = {
  qaContent: Question[];
};

export const Home: FC<HomeProps> = ({ qaContent }) => {
  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeftContainer}>
            <h1 className={styles.heroTitle}>GDOで幸せを極限に</h1>
            <p className={styles.heroDescription}>
              GDO(Gross Domestic Oxytocin:
              国内総オキシトシン)はポジティブ日記アプリです。幸せホルモンであるオキシトシンをたくさん分泌することができます。ポジティブポイントを稼いであなたもポジティブに。
            </p>
            <div className={styles.startButton}>はじめる</div>
          </div>
          <div className={styles.heroRightContainer}>
            <Image
              src="/hero.png"
              className={styles.heroImage}
              width={700}
              height={700}
              alt="ヒーロー画像"
            />
          </div>
        </div>

        <div className={`${styles.introduceContainer} ${styles.reverse}`}>
          <div className={styles.introduceConclusion}>
            <h2 className={styles.introduceTitle}>もっと書きたくなる日記</h2>
            <p className={styles.introduceDescription}>
              1日の終わりにポジティブなことだけを日記に書いて、ポジティブポイントをゲットしましょう。どんな些細なことでも構いません。書いたらすぐに寝て、今日の日記の内容で頭の中をいっぱいにしましょう。
            </p>
          </div>
          <div className={styles.introduceImage}>
            <Image
              src="/diary.png"
              className={styles.heroImage}
              width={400}
              height={400}
              alt="日記の画像"
            />
          </div>
        </div>
        <div className={styles.introduceContainer}>
          <div className={styles.introduceConclusion}>
            <h2 className={styles.introduceTitle}>愛おしいペット</h2>
            <p className={styles.introduceDescription}>
              あなたには可愛いペットがいます。ペットは1日1回ポジティブポイントを与えないと、悲しんでしまいます。ペットはあなたに幸せホルモンを分泌させてくれます。なぜって？それはペットにポジティブポイントを与えてからのお楽しみ...。
            </p>
          </div>
          <div className={styles.introduceImage}>
            <Image
              src="/pet.png"
              className={styles.heroImage}
              width={400}
              height={400}
              alt="ペットの画像"
            />
          </div>
        </div>
        <div className={`${styles.introduceContainer} ${styles.reverse}`}>
          <div className={styles.introduceConclusion}>
            <h2 className={styles.introduceTitle}>あなたの幸せを可視化</h2>
            <p className={styles.introduceDescription}>
              あなたの幸せを数値で表します。あなたが積み上げてきたポジティブな出来事をGDOは全て記憶します。きっとあなたがどれだけ幸せなのかわかるはずです。
            </p>
          </div>
          <div className={styles.introduceImage}>
            <Image
              src="/point.png"
              className={styles.heroImage}
              width={400}
              height={400}
              alt="ポイントの画像"
            />
          </div>
        </div>
      </div>
      <h2 className={styles.qaTitle}>よくあるQ&A</h2>
      {qaContent.map((qa) => {
        return <Qa qa={qa} key={qa.question} />;
      })}
    </Layout>
  );
};
