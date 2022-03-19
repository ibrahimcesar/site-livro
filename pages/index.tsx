import type { NextPage } from "next";
import { useState } from "react";
import styles from '../styles/Home.module.css'

import { Content, Hero, MobileContent, Modal, Seo } from "@components";

const Home: NextPage = () => {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <Seo />
        <main className={styles.main}>
          <Content setModal={setSuccess} />
          <Hero />
        </main>
        <main className={styles.mobile}>
          <MobileContent />
        </main> 
      </div>
      { success ? <Modal setModal={setSuccess} /> : null}
    </>
  )
}

export default Home
