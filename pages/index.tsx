import type { NextPage } from 'next'
import LoginButton from './components/login'
import LogoutButton from './components/logout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <LoginButton />
        <LogoutButton />
      </main>

    </div>
  )
}

export default Home
