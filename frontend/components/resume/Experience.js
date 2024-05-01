import styles from '../../styles/Resume.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as regular from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/fontawesome-free-solid'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Zoom from '@mui/material/Zoom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function Experience() {
	const [experience, setExperience] = useState([])
	const data = useSelector((state) => state.resume.value.experiences)

	useEffect(() => {
		setExperience(data)
	}, [data])

	const experienceList =
		experience &&
		experience.map((e, key) => {
			let startMonth = new Date(e.startDate)
			startMonth = startMonth.getMonth()
			let startYear = new Date(e.startDate)
			startYear = startYear.getFullYear()
			let endMonth = new Date(e.endDate)
			endMonth = endMonth.getMonth()
			let endYear = new Date(e.endDate)
			endYear = endYear.getFullYear()

			let duration = new Date(e.endDate) - new Date(e.startDate)
			duration = Math.round(duration / (1000 * 3600 * 24 * 30.5 * 12))

			let formatedDesc = e.desc.map((e, key) => {
				return <p key={key}>{e}</p>
			})

			let techsList = e.techs.map((e, key) => {
				let iconSource
				if (brands[e.icon]) {
					iconSource = brands
				} else {
					iconSource = regular
				}
				return (
					<Tooltip
						TransitionComponent={Zoom}
						className={styles.expTechsItem}
						key={key}
						title={e.name}
						arrow
					>
						<FontAwesomeIcon icon={iconSource[e.icon]} />
					</Tooltip>
				)
			})

			return (
				<div className="box" key={key} id={styles.experienceBox}>
					<div className={styles.expTitle}>
						<Divider component="div" textAlign="left">
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									margin: '10px 0px'
								}}
							>
								<FontAwesomeIcon
									icon={faLocationArrow}
									style={{ marginRight: '15px' }}
								/>
								<h4 className={styles.company}>{e.company}</h4>
								<span className={styles.duration}>
									{startMonth}/{startYear} - {endMonth}/
									{endYear} ({duration} years)
								</span>
							</div>
						</Divider>
						<h3 className={styles.title}>{e.title}</h3>
					</div>
					<div className={styles.expDesc}>{formatedDesc}</div>
					<div className={styles.expTechs}>{techsList}</div>
				</div>
			)
		})

	return (
		<div className="container" id={styles.experiencesContainer}>
			{experienceList}
		</div>
	)
}

export default Experience
