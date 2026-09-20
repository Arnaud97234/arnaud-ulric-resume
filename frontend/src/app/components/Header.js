import styles from "../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryFull,
  faWifi,
  faVolume,
} from "@fortawesome/free-solid-svg-icons";
import { getCurrentDate } from "../../lib/formatDate";
import Weather from "../components/Weather";

export default function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.profileName}>Arnaud Ulric</span>
      <div className={styles.clock}>
        <span>{getCurrentDate()}</span>
        <Weather />
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faVolume} />
        <FontAwesomeIcon icon={faBatteryFull} />
      </div>
    </div>
  );
}
