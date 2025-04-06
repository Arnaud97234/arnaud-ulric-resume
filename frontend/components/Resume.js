'use client'
import styles from '../styles/Resume.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import resume, { addResumeToStore } from '@/reducers/resume'
import Experience from './resume/Experience'
import Technicals from './resume/Technicals'
import PdfDocument from './resume/PdfDocument'
import Diplomas from './resume/Diplomas'
import Languages from './resume/Languages'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
import Button from '@mui/material/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/fontawesome-free-solid'

import { pdf } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'

function Resume() {
	const dispatch = useDispatch()

	const addResume = (newResume) => {
		dispatch(addResumeToStore(newResume))
	}

	const resumeStored = useSelector((state) => state.resume.value)

	useEffect(() => {
		if (
			!resumeStored.experiences ||
			resumeStored.experiences.length === 1 
		) {
			// fetch('http://localhost:3000/experience')
			fetch('https://arnaud-ulric-resume-backend.vercel.app/experience')
				.then((response) => response.json())
				.then((data) => {
					const sortedData = {...data, experiences: [...data.experiences].sort((a, b) => new Date(b.startDate) - new Date(a.startDate))} 
					addResume(sortedData)
				})
		}
	}, [resumeStored ,dispatch])

	const profileData = useSelector((state) => state.profile.value)

	const downloadPdf = async () => {
		const fileName = 'ArnaudUlric-QaEngineer.pdf'
		const blob = await pdf(
			<PdfDocument profile={profileData} resume={resumeStored} />
		).toBlob()
		saveAs(blob, fileName)
	}

	const downloadPdfBtn = () => {
		return (
			<Tooltip
				title="Download resume"
				TransitionComponent={Zoom}
				placement="top"
				arrow
			>
				<Button
					className={styles.downloadButton}
					variant="outlined"
					onClick={downloadPdf}
				>
					<FontAwesomeIcon icon={faDownload} />
					<span>.pdf</span>
				</Button>
			</Tooltip>
		)
	}

	return (
		<main className="main" id={styles.main}>
			<div className={styles.leftContainer}>
				{downloadPdfBtn()}
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
