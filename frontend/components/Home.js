import styles from '../styles/Home.module.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as regular from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function Home() {

    const user = useSelector((state) => state.users.value)

    const languageList = user.languages.map((e, key) => {
        return (
            <div className={styles.item} key={key}>
                <span>{e.name}</span>
                <span>{e.level}</span>
            </div>
        )
    })

    const skillsList = user.skills.map((e, key) => {
        let iconSource
        if (brands[e.icon]) {
            iconSource = brands
        } else {
            iconSource = regular
        }
        return (
            <div className={styles.item} key={key}>
                <span key={key}>{e.name}</span>
                <FontAwesomeIcon icon={iconSource[e.icon]} />
            </div>
        )
    })

    const formatedDesc = user.desc.map((e, key) => {
        return (
            <p key={key}>{e}</p>
        )
    })

    return (
        <>
            <main className="main" id={styles.main}>
                <div className='container' id={styles.introContainer}>
                    <h2 className='subTitle'>Introduction</h2>
                    <div className='boxContent' id={styles.introBox}>
                        {formatedDesc}
                    </div>
                </div>
                <div className='container' id={styles.skillsContainer}>
                    <h2 className='subTitle'>Skills</h2>
                    <div className='boxContent' id={styles.skillsBox}>
                        <div className={styles.languageBox}>
                            <Image className={styles.languageIcon} src='/languageIcon.jpg' width={40} height={40} alt='language' />
                            <div className={styles.languageList}>
                                {languageList}
                            </div>
                        </div>
                        <div className={styles.skillsBox}>
                            {skillsList}
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Home