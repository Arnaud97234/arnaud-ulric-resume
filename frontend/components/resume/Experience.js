import styles from '../../styles/Resume.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as regular from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/fontawesome-free-solid'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Zoom from '@mui/material/Zoom'
import { useSelector } from 'react-redux'
import { Link } from '@mui/material'

function Experience() {
	const experience = useSelector((state) => state.resume.value.experiences)

	const formatDuration = (start, end) => {
		const startDate = new Date(start);
		const endDate = new Date(end);
	  
		let years = endDate.getFullYear() - startDate.getFullYear();
		let months = endDate.getMonth() - startDate.getMonth();
	  
		if (months < 0) {
		  years--;
		  months += 12;
		}
	  
		// Round up year if months > 9
		if (months > 9) {
		  years += 1;
		  months = 0;
		}
	  
		// Output logic
		if (years > 0 && months === 0) {
		  return `${years} year${years > 1 ? 's' : ''}`;
		} else if (years > 0) {
		  return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
		} else {
		  return `${months} month${months > 1 ? 's' : ''}`;
		}
	}  
	const formatDate = (date) => {
		if(date != null) {
			const d = new Date(date);
			const month = d.getMonth() + 1; // JS months are 0-based
			const year = d.getFullYear();
			return `${month}/${year}`;
		} else {
			return "today"
		}
	};
	const experienceList =
	experience && [...experience]
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // <-- sort DESC by startDate
    .map((e, key) => {
			let formatedEndDate = e.endDate ? e.endDate : new Date()

			let duration = formatDuration(e.startDate, formatedEndDate)

			let formatedDesc = e.desc.map((e, key) => {
				return <pre style={{ whiteSpace: 'pre-wrap' }} key={key}>{e}</pre>
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
								
								{e.company.link ? (
								<Link
									href={e.company.link}
									target="_blank"
									rel="noreferrer"
									style={{ all: 'unset', cursor: 'pointer' }}
								>
									<h4 className={styles.company}>{e.company.name}</h4>
								</Link>
								) : (
								<h4 className={styles.company}>{e.company.name}</h4>
								)}
								<span className={styles.duration}>
									{ `${formatDate(e.startDate)} - ${formatDate(e.endDate)} (${duration})`}
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
