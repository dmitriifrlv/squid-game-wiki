import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import main from '../public/images/main.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
<nav className={styles.nav}>
  <p>
    characters
    </p>
  <p>
    episodes
    </p>
  <p>
    games
    </p>
  </nav>
  <div className={styles.mainImg}>
  <Image
        src={main}
        alt="Picture of the author"
        // width={500} automatically provided
        // blurDataURL="data:..." automatically provided
         placeholder="blur" // Optional blur-up while loading
      />
        </div>
    </div>
  )
}

export default Home
