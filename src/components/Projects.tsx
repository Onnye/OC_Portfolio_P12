import React, { useState } from "react";
import PropTypes from "prop-types";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/data";

import styles from "../styles/components/Projects.module.scss";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title} data-aos="fade-up">
          Projets
        </h2>
        <p className={styles.desc} data-aos="fade-up">
          Explorez une sélection de mes projets récents en développement web,
          allant de la création de sites web personnalisés à l'optimisation SEO
          et au débogage.
        </p>
        <div
          className={styles.navPills}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <div
            className={`${styles.navLink} ${
              toggle === "all" ? styles.active : ""
            }`}
            onClick={() => setToggle("all")}
          >
            Tout
          </div>
          <div
            className={`${styles.navLink} ${
              toggle === "web site" ? styles.active : ""
            }`}
            onClick={() => setToggle("web site")}
          >
            Site Web
          </div>
          <div
            className={`${styles.navLink} ${
              toggle === "mobile app" ? styles.active : ""
            }`}
            onClick={() => setToggle("mobile app")}
          >
            App Mobile
          </div>
          <div
            className={`${styles.navLink} ${
              toggle === "others" ? styles.active : ""
            }`}
            onClick={() => setToggle("others")}
          >
            Autres
          </div>
        </div>
        <div className={styles.cardContainer} data-aos="fade-up">
          {projects
            .filter((item) => toggle === "all" || item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>
      <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

Projects.propTypes = {
  openModal: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    project: PropTypes.object,
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Projects;
