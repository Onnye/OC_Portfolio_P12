import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import errorImage from "../../public/images/404.webp";
import styles from "../styles/pages/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Page Non Trouvée</title>
        <meta
          name="description"
          content="La page que vous cherchez n'existe pas."
        />
      </Head>
      <div className={styles.pageContainer}>
        <div className="wrapper">
          <div className={styles.container}>
            <div className={styles.errorCode}>
              <span className={styles.number}>4</span>
              <Image
                src={errorImage}
                alt="Error Image"
                className={styles.image}
              />
              <span className={styles.number}>4</span>
            </div>
            <h1 className={styles.title}>PAGE NOT FOUND</h1>
            <p className={styles.description}>
              The page seems to be missing, perhaps it's time to go back home?
            </p>
            <Link href="/" legacyBehavior>
              <a className={styles.link}>
                <button className={styles.button}>BACK TO HOME</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
