import Image from "next/image";
import { Cta } from "@components/cta"

import styles from "../styles/Mobile.module.css";

const MobileContent = () => {
  return(
    <section className={styles.book}>
      <div className={styles.content}>

        <article className={styles.logo}>
          <Image
            src="/logo-darkmode.svg"
            title="Ibrahim Cesar"
            alt="Ibrahim Cesar"
            width="204"
            height="36"
          />
        </article>

        <article className={styles.text}>
          <div className={styles.body}>
           <Cta />
          </div>
        </article>
      </div>
    </section>
  );
}

export { MobileContent };
