import Image from "next/image";
import styles from "../styles/components/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={50} height={50} alt="ロゴ画像" />
        </div>
        <div className={styles.navItem}>日記を書く</div>
        <div className={styles.navItem}>ペット</div>
        <div className={styles.navItem}>プレゼント</div>
        <div className={styles.navItem}>マイページ</div>
      </div>
      <div className={styles.nav}>
        <div className={styles.navItem}>ログイン</div>
        <div className={styles.signUp}>新規登録</div>
      </div>
    </div>
  )
}

export default Header;