import Image from "next/image";
import { Cta } from "@components/cta"

import styles from "../styles/Content.module.css";

const Content = ({setModal}: any) => {
  return(
    <section className={styles.book}>
      <div className={styles.content}>

        <article className={styles.logo}>
          <Image
            src="/logo-lightmode.svg"
            title="Ibrahim Cesar"
            alt="Ibrahim Cesar"
            width="204"
            height="36"
          />
         </article>

        <Cta
          setModal={setModal}
        />

      </div>
    </section>
  );
}

export { Content };
