import styles from '../styles/Home.module.css'
import React from 'react'
import { useState, useEffect } from 'react'

function Home() {

    const [desc, setDesc] = useState([])
    const [languages, setLanguages] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users/arnaud.ulric@gmail.com").then(response => response.json()).then(data => {
            const desc = data.user.desc
            const skills = data.user.skills
            const languages = data.user.languages
            setDesc(desc)
            setSkills(skills)
            setLanguages(languages)
        })
    }, [])

    const languageList = languages.map((e) => {
        return (
            <span>{e.name}: {e.level}</span>
        )
    })

    const skillsList = skills.map((e) => {
        return (
            <span>{e.name}</span>
        )
    })

    const formatedDesc = desc.map((e) => {
        return (
            <p>{e}</p>
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