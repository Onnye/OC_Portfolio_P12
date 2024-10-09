import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/global.scss";
import "../styles/variables.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="pageContainer">
      <Navbar />
      <main className="contentWrapper">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
