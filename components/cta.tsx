import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import Image from "next/image";

import styles from "../styles/Content.module.css";

const Cta = ({ setModal }: any) => {

  const [error, setError] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { register, handleSubmit } = useForm<{
    email: string;
    name: string;
  }>();

  const onSubmit = handleSubmit(async (data) => {
    const { email, name } = data;

    if (executeRecaptcha) {
      const token = await executeRecaptcha('landing');
      const subscribe = await fetch('/api/subscribe', {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          token
        })
      })
      const result = await subscribe.json();
      if (result.created) {
        setModal(true);
      } else {
        setError(true)
      }
    }
  })


  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return(
      <article className={styles.cta}>
          <div className={styles.card}>
            <div className={styles.title}>
              <h1>AWS</h1>
              <p>Um livro que mergulha fundo na <span>Amazon Web Services</span>.</p>
            </div>

            <div className={styles.copy}>
              <p>Construa e escale serviços na maior das nuvens, a <span>AWS</span>. Inscreva-se para receber atualizações frequentes sobre o livro e cloud e ser notificado do lançamento. Pessoas inscritas também poderão ganhar livros <span>na faixa!</span> </p>
            </div>

        <div id="revue-embed">
          <form action="https://www.getrevue.co/profile/ibrahimcesar/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
                <label htmlFor="member_first_name" title="Nome">
                <input className="revue-form-field" placeholder="Nome" type="text" name="member[first_name]" id="member_first_name" />
            </label>

              <label htmlFor="member_email" title="E-mail">
              <input className="revue-form-field" placeholder="E-mail" type="email" name="member[email]" id="member_email"/>
            </label>

          <button type="submit" name="member[subscribe]" id="member_submit" >Fique por dentro</button>

            <p className={styles.error}>Ao se inscrever, você está de acordo com <a target="_blank" rel="noreferrer" href="https://www.getrevue.co/terms">Termos de serviço</a> e <a target="_blank" rel="noreferrer" href="https://www.getrevue.co/privacy">Política de Privacidade</a>.</p>
          </form>

            <div className={styles.partner}>
                <a
                  href="https://www.casadocodigo.com.br/"
                  target="_blank"
                  rel="noreferrer">
                    <Image
                      src="/casa-do-codigo.jpg"
                      title="Casa do Código"
                      alt="Editora Casa do Código"
                      width="216"
                      height="63"/>
                </a>
            </div>
        </div>
      </div>
     </article>
  );
}

export { Cta };
