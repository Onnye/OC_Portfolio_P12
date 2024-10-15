import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/global.scss";
import "../styles/variables.scss";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 100,
      delay: 0,
      duration: 900,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <main>
      <Navbar /> {/* Navigation visible sur toutes les pages */}
      <Component {...pageProps} />
      <Footer /> {/* Footer visible sur toutes les pages */}
    </main>
  );
}

export default App;
