import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

import "../styles/global.scss";
import "../styles/variables.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
