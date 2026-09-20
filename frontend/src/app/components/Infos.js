"use client";

import AppHeader from "./windows/AppHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import {
  faTerminal,
  faArrowUpRightFromSquare,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import * as brands from "@fortawesome/free-brands-svg-icons";
import * as solid from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/profileInfo.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "./Loading";

const uptime = () => {
  const startDate = new Date("2013-05-01");
  const now = new Date();

  const diffMs = now - startDate;
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.5);
  return Math.round(years);
};

const ProfileId = () => {
  return (
    <div className={styles.terminalUser}>
      arnaud<span style={{ color: "white", margin: 0, padding: 0 }}>@</span>
      ulric:<span style={{ color: "white", margin: 0, padding: 0 }}>~</span>$
    </div>
  );
};

export default function Intro() {
  const [copied, setCopied] = useState(false);
  const {
    profile: profileData,
    loading: profileLoading,
    error: profileError,
  } = useSelector((state) => state.user);
  const {
    data: skillsData,
    loading: skillsLoading,
    error: skillsError,
  } = useSelector((state) => state.skills);

  if (profileLoading || skillsLoading) {
    return <Loading />;
  }

  if (profileError || skillsError) {
    return <div>Error: {skillsError || profileError}</div>;
  }

  const Links = () => {
    if (!profileData || !profileData.links) return null;
    const links = profileData.links.map((e) => {
      let icon = brands[e.icon];
      return (
        <li className={styles.item} key={e._id}>
          <FontAwesomeIcon icon={icon} />:{" "}
          <Link href={e.url} target="_blank">
            <span className={styles.value}>{e.name}</span>
          </Link>
        </li>
      );
    });
    return links;
  };

  const handleClick = () => {
    if (!profileData) return;
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skills =
    skillsData?.skills?.map((s, key) => {
      let icon = brands[s.icon] ? brands[s.icon] : solid[s.icon];
      return (
        <Tooltip describeChild title={s.name} key={key} disableInteractive>
          <span
            style={{ color: "#aef112", paddingLeft: 20, paddingBottom: 6 }}
            key={key}
          >
            <FontAwesomeIcon icon={icon} />
          </span>
        </Tooltip>
      );
    }) || [];

  return (
    <>
      <AppHeader
        appTitle="Infos"
        appIcon={<FontAwesomeIcon icon={faTerminal} />}
      />
      <div className="box" id={styles.infoBox}>
        <div>
          <ProfileId />
          <p style={{ color: "#34E2E2" }}>neofetch</p>
        </div>
        <div>
          <Image
            className={styles.profilePicture}
            src="/profile.jpg"
            alt="Arnaud-ascii"
            width={120}
            height={120}
          />
          <div className={styles.infos}>
            <span className={styles.title}>
              Arnaud<span style={{ color: "white" }}>@</span>Ulric
            </span>
            <hr className={styles.dashed}></hr>
            <ul>
              <li>
                <span className={styles.item}>Role: </span>
                <span className={styles.value}>{profileData?.title}</span>
              </li>
              <li>
                <span className={styles.item}>Location: </span>
                <span className={styles.value}>Paris, France</span>
              </li>
              <li>
                <span className={styles.item}>Uptime: </span>
                <span className={styles.value}>{uptime()} years</span>
              </li>
              <li>
                <span className={styles.item}>Languages: </span>
                <span className={styles.value}>French / English</span>
              </li>
              <li>
                <span className={styles.item}>Email: </span>
                <span
                  className={`${styles.value} ${copied ? styles.copied : ""}`}
                  id={styles.email}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  {copied ? (
                    <>
                      copied! <FontAwesomeIcon icon={faCircleCheck} />
                    </>
                  ) : (
                    profileData?.email
                  )}
                </span>
              </li>
              <Links />
            </ul>
            <br />
            <p>
              <strong>Expertise:</strong>
            </p>
            <p>QA • Automation • Testing</p>

            <br />

            <em>"Passionate about delivering bug-free software"</em>
          </div>
        </div>
        <div>
          <ProfileId />
          <p style={{ color: "#34E2E2" }}>ls skills</p>
        </div>
        <div style={{ alignSelf: "center" }}>{skills}</div>
      </div>
    </>
  );
}
