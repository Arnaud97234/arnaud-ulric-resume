import styles from '../styles/Resume.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import resume, { addResumeToStore } from '@/reducers/resume'
import Experience from './resume/Experience'
import Technicals from './resume/Technicals'
import Diplomas from './resume/Diplomas'
import Languages from './resume/Languages'
import Divider from '@mui/material/Divider'

function Resume() {
	const dispatch = useDispatch()

	const addResume = (newResume) => {
		dispatch(addResumeToStore(newResume))
	}

	const resumeStrored = useSelector((state) => state.resume.value)

	useEffect(() => {
		fetch('https://arnaud-ulric-resume-backend.vercel.app/experience')
			.then((response) => response.json())
			.then((data) => {
				addResume(data)
			})
	}, [])

	return (
		<main className="main" id={styles.main}>
			<div className={styles.leftContainer}>
				<Languages />
				<Technicals />
				<Diplomas />
			</div>
			<Divider
				style={{ margin: '0 40px' }}
				orientation="vertical"
				variant="middle"
				flexItem
			/>
			<div className={styles.experiencesContainer}>
				<div className="box">
					<Experience />
				</div>
			</div>
		</main>
	)
}

export default Resume
