import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import styles from "../styles/components/navbar.module.scss";
import SetTheme from "./theme.util";
import Logo from "./Logo";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMounted, setIsMounted] = useState(false); // Pour vérifier si le composant est monté côté client
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Fonction pour récupérer le thème du localStorage
  useEffect(() => {
    setIsMounted(true); // Le composant est maintenant monté côté client
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Synchronise le thème à chaque changement de page
  useEffect(() => {
    if (isMounted) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, [router.pathname, isMounted]);

  // Fonction pour gérer le changement de thème
  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
  };

  // Fermer automatiquement le menu mobile lors du changement de route
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  // Fonction pour gérer le scroll vers une section
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    if (router.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -100;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  if (!isMounted) {
    // Rendu pendant le serveur ou avant le montage du composant
    return null;
  }

  return (
    <div className={styles.nav}>
      <div className={styles.navbarContainer}>
        <Link href="/" passHref legacyBehavior>
          <a className={styles.navLogo}>
            {/* Le logo change en fonction du thème */}
            <Logo theme={theme} />
          </a>
        </Link>
        <div className={styles.navActionsMobile}>
          <SetTheme onThemeChange={handleThemeChange} />
          <div className={styles.mobileIcon} onClick={() => setIsOpen(!isOpen)}>
            <FaBars aria-label="Ouvrir le menu" />
          </div>
        </div>
        <ul className={styles.navItems}>
          <li>
            <a
              href="#about"
              className={styles.navLink}
              onClick={(e) => handleScrollToSection(e, "about")}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={styles.navLink}
              onClick={(e) => handleScrollToSection(e, "skills")}
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={styles.navLink}
              onClick={(e) => handleScrollToSection(e, "projects")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={styles.navLink}
              onClick={(e) => handleScrollToSection(e, "services")}
            >
              Services
            </a>
          </li>
          <li>
            <a href="/blog" className={styles.navLink}>
              Blog
            </a>
          </li>
        </ul>
        <div className={styles.navActions}>
          <SetTheme onThemeChange={handleThemeChange} />
          <a href="/contact" className={styles.githubButton}>
            Contact
          </a>
        </div>
        {isOpen && (
          <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
            <a
              href="#about"
              className={styles.mobileLink}
              onClick={(e) => handleScrollToSection(e, "about")}
            >
              Accueil
            </a>
            <a
              href="#skills"
              className={styles.mobileLink}
              onClick={(e) => handleScrollToSection(e, "skills")}
            >
              Compétences
            </a>
            <a
              href="#projects"
              className={styles.mobileLink}
              onClick={(e) => handleScrollToSection(e, "projects")}
            >
              Portfolio
            </a>
            <a
              href="#services"
              className={styles.mobileLink}
              onClick={(e) => handleScrollToSection(e, "services")}
            >
              Services
            </a>
            <a href="/blog" className={styles.mobileLink}>
              Blog
            </a>
            <a
              href="/contact"
              className={`${styles.mobileLink} ${styles.mobileButton}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
