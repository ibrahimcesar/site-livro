import Image from "next/image";

import styles from '../styles/Hero.module.css';



const Hero = () => {
  return(
    <section className={styles.main}>
      <div className={styles.image}>
        <Image src="/livro-aws.svg" layout="fill" alt="AWS: Construa e escale na nuvem" priority />
      </div>
    </section>
  );
}

export { Hero };