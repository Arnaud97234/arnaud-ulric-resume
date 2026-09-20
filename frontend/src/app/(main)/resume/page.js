"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import * as brands from "@fortawesome/free-brands-svg-icons";
import * as solid from "@fortawesome/free-solid-svg-icons";
import AppHeader from "@/app/components/windows/AppHeader";
import styles from "../../../styles/resume.module.css";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import { formatDate, getDuration } from "@/lib/formatDate";
import DownloadResumeButton from "@/app/components/resume/DownloadPdfButton";
import Loading from "@/app/components/Loading";

export default function Resume() {
  const {
    data: experienceData,
    loading: experienceLoading,
    error: experienceError,
  } = useSelector((state) => state.experience);
  const {
    profile: profileData,
    loading: profileLoading,
    error: profileError,
  } = useSelector((state) => state.user);

  if (experienceLoading || profileLoading) {
    return <Loading />;
  }

  if (experienceError || profileError) {
    return <div>Error: {experienceError || profileError}</div>;
  }

  if (
    !experienceData ||
    !experienceData.expertises ||
    experienceData.expertises.length === 0
  ) {
    return <div>No experience data available</div>;
  }

  const expertises = [
    {
      list: experienceData.expertises[0].techs,
      name: "technologies",
    },
    {
      list: experienceData.expertises[0].tools,
      name: "tools",
    },
  ];

  const Expertise = () => {
    const expertise = expertises.map((e, key) => {
      const list = e.list.map((i, key) => {
        return (
          <ul key={key}>
            <li>{i.name}</li>
          </ul>
        );
      });
      return (
        <div className={styles.expertiseElem} key={key}>
          <span>📁 {e.name}</span>
          {list}
        </div>
      );
    });
    return expertise;
  };

  const Experience = () => {
    if (
      !experienceData ||
      !experienceData.experiences ||
      experienceData.experiences.length === 0
    ) {
      return <div>No experiences found</div>;
    }

    const sortedExperiences = [...experienceData.experiences].sort(
      (a, b) => new Date(b.startDate) - new Date(a.startDate),
    );
    const experience = sortedExperiences.map((e, key) => {
      const description = e.desc.map((d, key) => {
        return (
          <p style={{ color: "#ce9178", paddingBottom: 6 }} key={key}>
            • {d}
          </p>
        );
      });
      const achievement = e.achievements.map((a, key) => {
        return (
          <p style={{ color: "#ce9178", paddingBottom: 6 }} key={key}>
            • {a}
          </p>
        );
      });

      const techs = e.techs.map((t, key) => {
        let icon = brands[t.icon] ? brands[t.icon] : solid[t.icon];
        return (
          <Tooltip describeChild title={t.name} key={key} disableInteractive>
            <span
              style={{ color: "#ce9178", paddingLeft: 20, paddingBottom: 6 }}
            >
              <FontAwesomeIcon icon={icon} />
            </span>
          </Tooltip>
        );
      });

      return (
        <div
          className={styles.experience}
          key={key}
          style={{
            borderBottom:
              key === sortedExperiences.length - 1 ? "none" : undefined,
          }}
        >
          <p style={{ color: "#4ec9b0", fontWeight: "bold" }}>
            {e.company.name}
          </p>
          <p style={{ color: "#9cdcfe", marginBottom: 6 }}>
            {e.title} - {formatDate(e.startDate)} / {formatDate(e.endDate)} (
            {getDuration(e.startDate, e.endDate)})
          </p>
          <div style={styles.expDesc}>{description}</div>
          {achievement.length > 0 && (
            <div className={styles.achievements}>
              <span className={styles.achievementTitle}>Achievements:</span>
              <div className={styles.achDesc}>{achievement}</div>
            </div>
          )}
          <div className={styles.expTechs}>{techs}</div>
        </div>
      );
    });
    return experience;
  };

  return (
    <>
      <AppHeader
        appTitle="Resume"
        appIcon={<FontAwesomeIcon icon={faCode} />}
      />
      <div className="box" id={styles.vsCodeBox}>
        <div className={styles.leftBox}>
          <span className={styles.leftBoxTitle}>EXPERTISE</span>
          <Expertise />
          <DownloadResumeButton
            experienceData={experienceData}
            profileData={profileData}
          />
        </div>
        <div className={styles.rightBox}>
          <div className={styles.tab}>
            <span style={{ fontFamily: "system-ui", fontSize: 14 }}>
              experience.ts
            </span>
          </div>
          <div className={styles.code}>
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}
