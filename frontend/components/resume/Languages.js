import styles from '../../styles/Resume.module.css'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

function Languages() {
	const [languages, setLanguages] = useState([])
	const data = useSelector((state) => state.resume.value)

	useEffect(() => {
		setLanguages(data.expertises[0].languages)
	}, [data])

	const languageList = languages.map((e, key) => {
		return (
			<div className={styles.languageItem} key={key}>
				<span className={styles.languageName}>{e.name}</span>
				<span className={styles.languageLevel}>{e.level}</span>
			</div>
		)
	})

	return (
		<div className="container" id={styles.languagesContainer}>
			<Image
				className={styles.languageIcon}
				src="/languageIcon.jpg"
				width={40}
				height={40}
				alt="language"
			/>
			{languageList}
		</div>
	)
}

export default Languages
