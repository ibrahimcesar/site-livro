import "../styles/globals.css"
import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';

function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
    >
        <Component {...pageProps} />
     </GoogleReCaptchaProvider>
  )
}

export default App
