"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/loading.module.css";

export default function Loading() {
  return (
    <div
      className="box"
      style={{
        background: "var(--color-terminal-bg)",
        minWidth: "620px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        minHeight: "400px",
      }}
    >
      <div className={styles.loaderContainer}>
        <FontAwesomeIcon icon={faSpinner} className={styles.spinner} spin />
      </div>
    </div>
  );
}
