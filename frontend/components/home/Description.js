import styles from '../../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import Link from 'next/link'

function Description() {

    const [desc, setDesc] = useState([])
    const data = useSelector((state) => state.users.value)

    useEffect(() => {
        setDesc(data.desc)
    }, [data])

    const formatedDesc = desc.map((e, key) => {
        return (
            <p key={key}>{e}</p>
        )
    })

    return (
        <div className='container' id={styles.introContainer}>
            {formatedDesc}
            <h2 className='subTitle'>Testing</h2>
            <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://playwright.dev/' target="_blank">Playwright</Link> is my primary tool for UI tests these days. It’s fast, reliable, and has great documentation.</p>
            <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://wix.github.io/Detox/'>Detox</Link> is my preferred choice for conducting UI tests on React Native and I’ve also explored <Link className={styles.link} href='https://appium.io/docs/en/2.4/'>Appium.</Link></p>
            <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://www.postman.com/'>Postman</Link> is an indispensable tool for API testing but for smaller projects, I prefer <Link className={styles.link} href='https://insomnia.rest/'>Insomnia.</Link></p>
            <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://remix-project.org/'>Remix</Link> / <Link className={styles.link} href='https://hardhat.org/'>Hardhat</Link> for EVM (Blockchain) development and testing.</p>

            <h2 className='subTitle'>Development</h2>
            <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} />I use <Link className={styles.link} href='https://code.visualstudio.com/'>Visual Studio Code</Link> as my main IDE for all coding activities.</p>
            <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright/'>Playwright Test</Link> for VSCode is my Playwright extension, useful for test execution, debugging, and more.</p>
            <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://react.dev/'>React</Link> / <Link className={styles.link} href='https://reactnative.dev/'>React native</Link> is my favorite Javascript framework.</p>
            <p><FontAwesomeIcon className={styles.icon} icon={faChevronRight} /><Link className={styles.link} href='https://expressjs.com/'>ExpressJS</Link> / <Link className={styles.link} href='https://www.mongodb.com/'>MongoDB</Link> for backend.</p>
        </div>
    )
}

export default Description