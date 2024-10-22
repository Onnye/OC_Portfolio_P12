import React, { useState } from "react";
import Head from "next/head";

import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <Head>
        {/* Favicon */}
        <title>Laura TUFO - Développeuse Web | Frontend</title>
        {/* Meta tags globally applicable */}
        <meta charSet="UTF-8" />
        <meta name="author" content="Laura TUFO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Je conçois des sites web, optimisés pour la performance et le SEO. Besoin d'améliorer votre présence en ligne ? Travaillons ensemble pour concrétiser vos projets numériques"
        />
        <meta
          name="keywords"
          content="Développeuse Web, Frontend, SEO, Performance, Laura TUFO, Intégration web"
        />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph Meta Tags */}
        <meta
          property="og:title"
          content="Laura TUFO - Développeuse Web | Frontend"
        />
        <meta
          property="og:description"
          content="Je conçois des sites web optimisés pour la performance et le SEO."
        />
        <meta property="og:url" content="https://laura-tufo.com/"></meta>
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Laura TUFO - Développeuse Web | Frontend"
        />
        <meta
          name="twitter:description"
          content="Je conçois des sites web optimisés pour la performance et le SEO."
        />
      </Head>
      <main>
        <HeroSection />
        <div className="wrapper">
          <Skills />
        </div>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
      </main>
    </>
  );
};

export default Home;
