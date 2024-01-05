import styles from '../styles/Portfolio.module.css'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function Portfolio() {

    const projects = useSelector((state) => state.users.value.projects)

    const projectsList = projects.map((e, key) => {
        return (
            <div className='boxContent' id={styles.projectBox} key={key}>
                <h3 className={styles.projectName}>{e.name}</h3>
                <p>{e.desc}</p>
                <span className={styles.tech}>{e.techs}</span>
                <span className={styles.link}>{e.links}</span>
            </div>
        )
    })

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