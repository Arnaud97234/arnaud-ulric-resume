import styles from '../styles/Portfolio.module.css'
import React from 'react'
import { useSelector } from 'react-redux'
import Project from './projects/Project'
function Portfolio() {

    const projects = useSelector((state) => state.users.value.projects)

    const projectsList = projects.map((e, key) => {
        return (
            <Project props={e} key={key}/>
        )
    })

    return (
            <main className='main' id={styles.main}>
                    {projectsList}
            </main>
    )
}

export default Portfolio