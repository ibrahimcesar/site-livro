import Image from "next/image";

import styles from '../styles/Hero.module.css';



const Hero = () => {
  return(
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src="/livro-aws.svg" height="721" width="573" alt="AWS: Construa e escale na nuvem" priority />
        </div>
        </div>
    </section>
  );
}

export { Hero };