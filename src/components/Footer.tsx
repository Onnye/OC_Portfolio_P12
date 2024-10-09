import React from "react";
import styles from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerWrapper}>
        <h1 className={styles.footerLogo}>Laura TUFO</h1>
        <p className={styles.tagline}>Intégration et développement web.</p>

        <div className={styles.footerLinks}>
          <a
            href="/politique-de-confidentialite"
            rel="noopener noreferrer"
            aria-label="Lire la Politique de Confidentialité"
            title="Lire la Politique de Confidentialité"
          >
            Politique de Confidentialité
          </a>
          <span> | </span>
          <a
            href="/mentions-legales"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lire les Mentions légales"
            title="Lire les Mentions légales"
          >
            Mentions légales
          </a>
          <span> | </span>
          <a
            href="/contact"
            rel="noopener noreferrer"
            aria-label="Me contacter"
            title="Me contacter"
          >
            Contact
          </a>
          <span> | </span>
          <a
            href="/faq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consulter la FAQ"
            title="Consulter la FAQ"
          >
            FAQ
          </a>
        </div>

        <p className={styles.copyright}>
          &copy; 2024 Laura TUFO. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
