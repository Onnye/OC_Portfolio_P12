import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/components/ProjectCards.module.scss";

const ProjectCard = ({ project, setOpenModal }) => {
  // Gérer le clic sur le bouton pour ouvrir le modal
  const handleButtonClick = (e, project) => {
    e.preventDefault();
    setOpenModal({ state: true, project });
  };

  return (
    <section className={styles.projectWrapper}>
      <div
        className={styles.card}
        onClick={() => setOpenModal({ state: true, project })}
        role="button"
        tabIndex={0}
      >
        <div className={styles.cardInner}>
          <div className={styles.box}>
            <div className={styles.imgBox}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.icon}>
              <a
                href={project.webapp}
                className={styles.iconBox}
                onClick={(e) => handleButtonClick(e, project)}
              >
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.tags?.map((tag, index) => (
              <li key={index} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    webapp: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    member: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ProjectCard;
