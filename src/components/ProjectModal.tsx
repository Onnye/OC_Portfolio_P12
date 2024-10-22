import React from "react";
import { Modal } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

import styles from "../styles/components/ProjectModal.module.scss";

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={openModal.state}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CloseRounded
            className={styles.closeIcon}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={project?.image}
            alt={project?.title}
            className={styles.image}
          />
          <div className={styles.title}>{project?.title}</div>

          <div className={styles.desc}>{project?.description}</div>

          <div className={styles.buttonGroup}>
            <a
              href={project?.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.dull}`}
            >
              View Code
            </a>
            <a
              href={project?.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              View Live App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
