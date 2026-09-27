"use client";

import { useSelector } from "react-redux";
import styles from "../../../styles/resume.module.css";
import { formatDate } from "@/lib/formatDate";

export default function Diploma() {
  const {
    data: experienceData,
    loading: experienceLoading,
    error: experienceError,
  } = useSelector((state) => state.experience);

  if (experienceLoading) {
    return <div>Loading...</div>;
  }

  if (experienceError) {
    return <div>Error: {experienceError}</div>;
  }

  if (
    !experienceData ||
    !experienceData.diplomas ||
    experienceData.diplomas.length === 0
  ) {
    return null;
  }

  // Sort diplomas by date in descending order (newest first)
  const sortedDiplomas = [...experienceData.diplomas].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const diplomas = sortedDiplomas.map((diploma, key) => {
    return (
      <div className={styles.diplomaElem} key={key}>
        <span>{diploma.title}</span>
        <ul>
          <li key={`date-${key}`}>{formatDate(diploma.date)}</li>
        </ul>
      </div>
    );
  });

  return diplomas;
}