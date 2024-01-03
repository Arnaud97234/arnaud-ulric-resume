import styles from '../styles/Portfolio.module.css'
import React from 'react'
import { useState, useEffect } from 'react'

function Portfolio() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/projects").then(response => response.json()).then(data => {
            setProjects(data.projects)
        })
    })

    const projectsList = projects.map((e, key) => {
        return (
            <div className='boxContent' id={styles.projectBox} key={key}>
                <h3 className={styles.projectName}>{e.name}</h3>
                <p>{e.desc}</p>
                <span className={styles.tech}>{e.techs}</span>
                <span className={styles.link}>{e.links}</span>
            </div>
        )
    }, [])

    return (
        <>
            <main className='main' id={styles.main}>
                <div className='container' id={styles.portfolioContainer}>
                    <h2 className='subTitle'>Portfolio</h2>
                    <div className='box' id={styles.box}>
                        {projectsList}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Portfolio