import styles from '../styles/Home.module.css'
import Skills from './home/Skills'
import Description from './home/Description'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Divider from '@mui/material/Divider'
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faChevronRight } from '@fortawesome/fontawesome-free-solid'

import { StyledEngineProvider } from '@mui/material/styles'

function Home() {
    const router = useRouter()

    const buttons = [
        <Button key='1' className={styles.homeBtn} onClick={() => {
            router.push("/resume")
        }}>View Resume</Button>,
        <Button key='2' className={styles.homeBtn} onClick={() => {
            router.push("/portfolio")
        }}>Projects</Button>
    ]

    return (
        <main className="main" id={styles.main}>
            <div className={styles.leftContainer}>
                <Description />
                <Skills />
            </div>
            <Divider style={{ margin: '0 40px' }} orientation='vertical' variant='middle' flexItem />
            <div className={styles.rightContainer}>
                <div className={styles.navigation}>
                <StyledEngineProvider injectFirst>
                    <ButtonGroup
                        className={styles.btnGroup}
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text">
                        {buttons}
                    </ButtonGroup>
                    </StyledEngineProvider>
                    <Image className={styles.userPicture} src='/userPicture.jpg' width={320} height={320} alt='user' priority={true}/>
                </div>
                <Divider component="div" textAlign='left' style={{paddingTop: "20px"}}>
                    <div style={{ paddingLeft:'10px', paddingRight: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 0px' }}>
                        <FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: '15px' }} />
                        <h4 style={{fontSize:"1.4rem"}}>Testing</h4>
                    </div>
                </Divider>
                <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://playwright.dev/' target="_blank">Playwright</Link> is my primary tool for UI tests these days, I also explore <Link className={styles.link} href='https://www.cypress.io/' target="_blank">Cypress</Link>, both are fast, reliable, and has great documentation, it's also compatible with <Link className={styles.link} href='https://www.electronjs.org/' target="_blank">Electron</Link> apps and <Link className={styles.link} href='https://github.com/Synthetixio/synpress' target="_blank">Synpress</Link> for dApp testing.</p>
                <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://wix.github.io/Detox/' target="_blank">Detox</Link> is my preferred choice for conducting UI tests on React Native and I’ve also explored <Link className={styles.link} href='https://appium.io/docs/en/2.4/' target="_blank">Appium.</Link></p>
                <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://www.postman.com/' target="_blank">Postman</Link> is an indispensable tool for API testing but for smaller projects, I prefer <Link className={styles.link} href='https://insomnia.rest/' target="_blank">Insomnia.</Link></p>
                <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://remix-project.org/' target="_blank">Remix</Link> / <Link className={styles.link} href='https://hardhat.org/' target="_blank">Hardhat</Link> for EVM (Blockchain) development and testing.</p>

                <Divider component="div" textAlign='left' style={{paddingTop: "20px", marginTop: "10px"}}>
                <div style={{ paddingLeft:'10px', paddingRight: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 0px' }}>
                        <FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: '15px' }} />
                        <h4 style={{fontSize:"1.4rem"}}>Development</h4>
                    </div>
                </Divider>
                <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} />I use <Link className={styles.link} href='https://code.visualstudio.com/' target="_blank">Visual Studio Code</Link> as my main IDE for all coding activities.</p>
                <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright/' target="_blank">Playwright Test</Link> for VSCode is my Playwright extension, useful for test execution, debugging, and more.</p>
                <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://react.dev/' target="_blank">React</Link> / <Link className={styles.link} href='https://reactnative.dev/' target="_blank">React native</Link> is my favorite Javascript framework.</p>
                <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://expressjs.com/' target="_blank">ExpressJS</Link> / <Link className={styles.link} href='https://www.mongodb.com/' target="_blank">MongoDB</Link> for backend.</p>
            </div>
        </main>
    )
}

export default Home