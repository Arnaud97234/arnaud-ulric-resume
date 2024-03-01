import styles from '../styles/Portfolio.module.css'
import React from 'react'
import { useSelector } from 'react-redux'
import Project from './projects/Project'
import { StyledEngineProvider } from '@mui/material/styles'

function Portfolio() {

    const projects = useSelector((state) => state.users.value.projects)

    const projectsList = projects.map((e, key) => {
        return (
            <Project props={e} key={key}/>
        )
    })

    return (
        <StyledEngineProvider injectFirst>
            <main className='main' id={styles.main}>
                    {projectsList}
            </main>
        </StyledEngineProvider>
    )
}

export default Portfolio