import Image from "next/image";
import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.snsContainer}>
        <Image src="/icon/facebook.svg" className={styles.snsIcon} width={32} height={32} alt="facebookのアイコン" />
        <Image src="/icon/twitter.svg" className={styles.snsIcon} width={32} height={32} alt="twitterのアイコン" />
        <Image src="/icon/instagram.svg" className={styles.snsIcon} width={32} height={32} alt="instagramのアイコン" />
      </div>
      <div className={styles.text}><big className={styles.symbol}>&copy;</big> 2022 All Rights Reserved, GDO</div>
    </div>
  )
}

export default Footer;