import styles from '../styles/Home.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

    const user = useSelector((state) => state.users.value)

    const languageList = user.languages.map((e, key) => {
        return (
            <span key={key}>{e.name}: {e.level}</span>
        )
    })

    const skillsList = user.skills.map((e, key) => {
        return (
            <span key={key}>{e.name}</span>
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
                        {languageList}
                        {skillsList}
                    </div>
                </div>

            </main>
        </>
    )
}

export default Home