import React, { useEffect } from "react";
import Image from "next/image";

import { skills } from "../data/data";
import styles from "../styles/components/skills.module.scss";

const Skills: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.skill}`);

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      requestAnimationFrame(() => {
        card.style.transform = `rotateY(${deltaX * 10}deg) rotateX(${
          deltaY * -10
        }deg)`;
        card.style.boxShadow = `${deltaX * -10}px ${
          deltaY * 10
        }px 20px rgba(23, 92, 230, 0.2)`;
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;

      requestAnimationFrame(() => {
        card.style.transform = "rotateY(0) rotateX(0)";
        card.style.boxShadow = "0px 0px 10px 0px rgba(23, 92, 230, 0.15)";
      });
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div id="skills" className={styles.container}>
      <div className={styles.wrapp}>
        <h2 className={styles.title} data-aos="fade-up">
          Compétences
        </h2>
        <p className={styles.desc} data-aos="fade-up">
          Voici quelques-unes des compétences sur lesquelles j'ai travaillé ces
          deux dernières années.
        </p>
        <div className={styles.skillsContainer} data-aos="fade-up">
          {skills.map((skill) => (
            <div key={skill.title} className={styles.skill}>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <div className={styles.skillList}>
                {skill.skills.map((item) => (
                  <div key={item.name} className={styles.skillItem}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={24}
                      height={24}
                      className={styles.skillImage}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
