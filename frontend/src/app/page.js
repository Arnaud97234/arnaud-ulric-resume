"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faArrowRotateRight,
  faLock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import AppHeader from "@/app/components/windows/AppHeader";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import Divider from "@mui/material/Divider";

export default function Page() {
  return (
    <>
      <AppHeader
        appTitle="Intro"
        appIcon={<FontAwesomeIcon icon={faGlobe} />}
      />
      <div className={styles.browserToolbar}>
        <span>
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </span>
        <div className={styles.urlBar}>
          <span className={styles.lockIcon}>
            <FontAwesomeIcon icon={faLock} />
          </span>
          <p>https://arnaud.ulric/QA-Engineer</p>
        </div>
      </div>
      <div className="box" id={styles.browserBox}>
        <div className={styles.boxItem} id={styles.introduction}>
          <p>
            I'm <b style={{ color: "whitesmoke" }}>Arnaud Ulric</b>, a dedicated
            SDET Engineer navigating for more than a decade through diverse
            technologies and environments, honing my skills in{" "}
            <b style={{ color: "whitesmoke" }}>Software Quality Assurance</b>.
            My journey has led me to specialize in automation and global testing
            strategies, leveraging methodologies like BDD and TDD alongside
            JavaScript testing frameworks.
          </p>
          <p>
            Adaptability is my second nature, allowing me to seamlessly
            integrate with teams, scale projects, and take on leadership roles
            as a technical liaison between QA and other departments.
          </p>
          <p>
            Additionally, my journey includes a stint as a{" "}
            <b style={{ color: "whitesmoke" }}>React / Javascript</b> developer,
            where I cultivated a humble yet proficient skill set in computing.
            This dual proficiency allows me to bring testing to development,
            facilitating smoother collaborations.
          </p>
        </div>

        <div className={styles.boxItem} id={styles.expertise}>
          <div className={styles.expertiseItem}>
            <Divider
              className={styles.divider}
              component="div"
              textAlign="left"
            >
              <div>
                <div className={styles.icon}>
                  <Image
                    src="/debian-brands-solid.svg"
                    alt="expertiseIcon"
                    width={18}
                    height={18}
                  />
                </div>
                <h2>Testing</h2>
              </div>
            </Divider>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link href="https://playwright.dev/" target="_blank">
                    Playwright
                  </Link>{" "}
                  is my primary tool for UI tests these days, I also explore{" "}
                  <Link href="https://www.cypress.io/" target="_blank">
                    Cypress
                  </Link>
                  , both are fast, reliable, and has great documentation, it's
                  also compatible with{" "}
                  <Link href="https://www.electronjs.org/" target="_blank">
                    Electron
                  </Link>{" "}
                  apps and{" "}
                  <Link
                    href="https://github.com/Synthetixio/synpress"
                    target="_blank"
                  >
                    Synpress
                  </Link>{" "}
                  for dApp testing.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link href="https://wix.github.io/Detox/" target="_blank">
                    Detox
                  </Link>{" "}
                  is my preferred choice for conducting UI tests on React Native
                  and I`ve also explored{" "}
                  <Link href="https://appium.io/" target="_blank">
                    Appium
                  </Link>{" "}
                  and{" "}
                  <Link href="https://maestro.mobile.dev/" target="_blank">
                    Maestro
                  </Link>{" "}
                  that is very efficient thanks to it's quick setup and ease of
                  integration and execution.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link href="https://www.postman.com/" target="_blank">
                    Postman
                  </Link>{" "}
                  is an indispensable tool for Rest API testing but for smaller
                  projects, I prefer{" "}
                  <Link href="https://insomnia.rest/" target="_blank">
                    Insomnia
                  </Link>{" "}
                  .
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link href="https://pactumjs.github.io/" target="_blank">
                    PactumJS
                  </Link>{" "}
                  is what I currently use for test automation along with{" "}
                  <Link href="https://jestjs.io/" target="_blank">
                    Jest
                  </Link>{" "}
                  for execution.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link href="https://remix.run/" target="_blank">
                    Remix
                  </Link>{" "}
                  /{" "}
                  <Link href="https://hardhat.org/" target="_blank">
                    Hardhat
                  </Link>{" "}
                  for EVM (Blockchain) development and testing.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link href="https://cursor.com/" target="_blank">
                    Cursor
                  </Link>{" "}
                  /{" "}
                  <Link href="https://n8n.io/ai-agents/" target="_blank">
                    n8n
                  </Link>{" "}
                  for AI agentic testing, create agents that perform exploratory
                  testing, generate test plans, and write / run automation
                  scripts.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.expertiseItem} id={styles.programmingItem}>
            <Divider
              className={styles.divider}
              component="div"
              textAlign="left"
            >
              <div>
                <div className={styles.icon}>
                  <Image
                    src="/debian-brands-solid.svg"
                    alt="expertiseIcon"
                    width={18}
                    height={18}
                  />
                </div>
                <h2>Programming</h2>
              </div>
            </Divider>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  I use{" "}
                  <Link href="https://code.visualstudio.com/" target="_blank">
                    Visual Studio Code
                  </Link>{" "}
                  as my main IDE for all coding activities.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link
                    href="https://playwright.dev/docs/testing-vscode"
                    target="_blank"
                  >
                    Playwright Test for VSCode
                  </Link>{" "}
                  is my Playwright extension, useful for test execution,
                  debugging, and more.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link href="https://react.dev/" target="_blank">
                    React
                  </Link>{" "}
                  /{" "}
                  <Link href="https://reactnative.dev/" target="_blank">
                    React native
                  </Link>{" "}
                  is my favorite Javascript framework.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link href="https://expressjs.com/" target="_blank">
                    ExpressJS
                  </Link>{" "}
                  /{" "}
                  <Link href="https://www.mongodb.com/" target="_blank">
                    MongoDB
                  </Link>{" "}
                  for backend.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>
                  <Link
                    href="https://hermes-agent.nousresearch.com/"
                    target="_blank"
                  >
                    Hermes Agent
                  </Link>{" "}
                  and{" "}
                  <Link href="https://ollama.com/" target="_blank">
                    Ollama
                  </Link>{" "}
                  for running models locally and explore agentic AI development
                  and tasks automation, and to create intelligent agents that
                  can interact and other systems.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
