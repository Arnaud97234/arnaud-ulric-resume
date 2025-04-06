import styles from '../styles/Portfolio.module.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProjectsToStore } from '@/reducers/projects'
import Project from './projects/Project'
function Portfolio() {
	const dispatch = useDispatch()

	const addProject = (newProejct) => {
		dispatch(addProjectsToStore(newProejct))
	}

	const projectsStored = useSelector((state) => state.projects.value)

	useEffect(() => {
		if (!projectsStored[0].name) {
			// fetch('http://localhost:3000/projects')
			fetch('https://arnaud-ulric-resume-backend.vercel.app/projects')
				.then((response) => response.json())
				.then((data) => {
					addProject(data.projects)
				})
		}
	}, [projectsStored])

	const projectsList =
	projectsStored &&
	[...projectsStored].map((e, key) => {
			return <Project props={e} key={key} />
		})

	return (
		<main className="main" id={styles.main}>
			{projectsList}
		</main>
	)
}

export default Portfolio
