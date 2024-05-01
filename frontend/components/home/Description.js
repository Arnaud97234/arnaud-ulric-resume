import styles from '../../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Description() {
	const [desc, setDesc] = useState([])
	const data = useSelector((state) => state.intro.value)

	useEffect(() => {
		setDesc(data.desc)
	}, [data.desc])

	const formatedDesc = desc.map((e, key) => {
		return <p key={key}>{e}</p>
	})

	return (
		<div className="container" id={styles.introContainer}>
			{formatedDesc}
		</div>
	)
}

export default Description
