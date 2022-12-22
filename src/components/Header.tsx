import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Header.module.scss";
import React from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name
export const Header = React.memo(() => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src="/logo.png" width={50} height={50} alt="ロゴ画像" />
          </div>
        </Link>
        {/* <div className={styles[`${isAuth ? "authInner" : "guestInner"}`]}></div> */}
        <Link href="/Diary">
          <div className={`${styles.navItem} ${styles[`${router.asPath === "/Diary" && "currentNav"}`]}`}>日記を書く</div>
        </Link>
        <Link href="/Pet">
          <div className={`${styles.navItem} ${styles[`${router.asPath === "/Pet" && "currentNav"}`]}`}>ペット</div>
        </Link>
        <Link href="/Present">
          <div className={`${styles.navItem} ${styles[`${router.asPath === "/Present" && "currentNav"}`]}`}>プレゼント</div>
        </Link>
        <Link href="/MyPage">
          <div className={`${styles.navItem} ${styles[`${router.asPath === "/MyPage" && "currentNav"}`]}`}>マイページ</div>
        </Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.navItem}>ログイン</div>
        <div className={styles.signUp}>新規登録</div>
        <div className={styles.menuIcon}>
          <Image
            src="/icon/bars.svg"
            width={35}
            height={35}
            alt="メニューバー"
          />
        </div>
      </div>
    </div>
  );
});