import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import Image from "next/image";

import styles from "../styles/Content.module.css";

const Cta = ({ setModal }: any) => {
  const [error, setError] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<{
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
    <>
      <article className={styles.cta}>
          <div className={styles.card}>
            <div className={styles.title}>
              <h1>AWS</h1>
              <p>Um livro que mergulha fundo na <span>Amazon Web Services</span>.</p>
            </div>

            <div className={styles.copy}>
            <p>Construa e escale serviços na maior das nuvens, a <span>AWS</span>. Inscreva-se para receber atualizações frequentes sobre o livro e cloud e ser notificado do lançamento. Pessoas inscritas também poderão ganhar livros <span>na faixa!</span> </p>
            </div>

          <form onSubmit={onSubmit}>
             <input
                type="text"
              placeholder="Nome"
              {...register("name", { required: true })}
            />
              <input
                type="email"
                placeholder="E-mail"
              {...register("email", {required: true, pattern: emailRegex })}
            />
            <button type="submit">Fique por dentro</button>
            {error ? <p className={styles.error}>😓 Houve um erro ao fazer uma inscrição. Me <a href="https://github.com/ibrahimcesar/site-livro/issues/new">avise</a>!</p> : null}
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
        </article>
      </>
  );
}

export { Cta };
