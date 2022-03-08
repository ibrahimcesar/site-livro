/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import styles from "../styles/Modal.module.css";

const Modal = ({ setModal }: any) => {

  const closeModal = (e:any) => {
    setModal(false);
  }

  return (
    <>
      <section className={styles.modal}>
        <div className={styles.area}>
          <span>
            <button onClick={closeModal}>
              <img src="/close.svg" alt="Fechar modal" />
            </button>
          </span>

          <div className={styles.content}>

        <div className={styles.message}>

          <h1><span>Obrigado</span> por ter se cadastrado<span>.</span></h1>
          <p>Assim que o livro estiver disponível você receberá um aviso em seu email.</p>
          <p>Caso queira conferir novidades ou conversar, você também pode acompanhar o autor nas redes.</p>
        </div>

        <div className={styles.profile}>

          <div className={styles.photo}>
            <Image
              src="/profile-blue.png"
              height="170"
              width="186"
              alt="Ibrahim Cesar"
              />
          </div>

          <div className={styles.links}>
            <div className={styles.me}>
              <a
                href="https://ibrahimcesar.cloud"
                target="_blank"
                rel="noreferrer noopener">
                <span>@ibrahimcesar</span>
              </a>
            </div>

            <div className={styles.social}>
              <a
                href="https://twitter.com/intent/follow?screen_name=ibrahimcesar"
                target="_blank"
                rel="noreferrer noopener">
                <span>Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/ibrahimcesar"
                target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ibrahimcesar"
                target="_blank"
                rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
            </div>
          </div>

          </div>
          </div>
          </div>
      </section>
      <section className={styles.overlay}/>
    </>
  );
}

export { Modal };