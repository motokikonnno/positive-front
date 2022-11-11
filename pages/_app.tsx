import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId="6FVEUpDcbWVWU9XekkE7if4T3fQ4qJ2C"
      domain="dev-zgxnzdhhrwbohyvx.us.auth0.com"
      redirectUri="http://localhost:3000/"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
