import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import HeroImgDesktop from "../../public/images/profile.webp";
import { Bio } from "../data/data";
import styles from "../styles/components/heroSection.module.scss";

const HeroSection = () => {
  const socialLinks = [
    { href: Bio.github, icon: faGithub, label: "GitHub" },
    { href: Bio.linkedin, icon: faLinkedin, label: "LinkedIn" },
    { href: Bio.insta, icon: faInstagram, label: "Instagram" },
    { href: Bio.twitter, icon: faTwitter, label: "Twitter" },
  ];

  return (
    <div id="about" className={styles.heroContainer}>
      <div className={styles.heroInnerContainer}>
        <div className={styles.heroLeftContainer} id="Left">
          <div className={styles.title} data-aos="fade-right">
            Hello,
            <br />
            Je suis {Bio.name}
          </div>
          <div className={styles.textLoop} data-aos="fade-right">
            <span className={styles.span}>{Bio.roles}</span>
          </div>
          <div className={styles.subTitle} data-aos="fade-up">
            {Bio.description}
          </div>
          <div className={styles.buttonContainer} data-aos="fade-up">
            <a
              href={Bio.resume}
              target="_blank"
              className={styles.resumeButton}
              aria-label="Télécharger mon CV"
            >
              Télécharger CV
            </a>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lien vers mon profil ${link.label} - Ouvre dans une nouvelle fenêtre`}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className={styles.heroRightContainer}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className={styles.hero}>
            <div className={styles.circle}></div>
            <Image
              width="400"
              height="400"
              src={HeroImgDesktop}
              alt="Photo de Laura TUFO"
              className={styles.avatar}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
