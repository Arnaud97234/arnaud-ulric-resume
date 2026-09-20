"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  return (
    <nav className={styles.footer}>
      <Link
        href="/"
        style={{ color: pathname === "/" ? "rgb(0, 163, 255)" : "white" }}
      >
        - <img src="/profile.svg" alt="Home" className={styles.footerIcon} />
        <span>Home</span>
      </Link>

      <Link
        href="/resume"
        style={{ color: pathname === "/resume" ? "rgb(0, 163, 255)" : "white" }}
      >
        -{" "}
        <img src="/resume.svg" alt="Experience" className={styles.footerIcon} />
        <span>Experience</span>
      </Link>
    </nav>
  );
}
