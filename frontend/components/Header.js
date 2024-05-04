import styles from '../styles/Header.module.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faCheck } from '@fortawesome/fontawesome-free-solid'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addProfileToStore } from '@/reducers/profile'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
import { StyledEngineProvider } from '@mui/material/styles'

function Header() {
	const router = useRouter()
	const dispatch = useDispatch()

	const addProfile = (newProfile) => {
		dispatch(addProfileToStore(newProfile))
	}

	const [copied, setCopied] = useState(false)
	const [profile, setProfile] = useState({})
	const profileStored = useSelector((state) => state.profile.value)

	useEffect(() => {
		fetch('https://arnaud-ulric-resume-backend.vercel.app/profile')
			.then((response) => response.json())
			.then((data) => {
				addProfile(data.profile[0])
			})
	}, [])

	useEffect(() => {
		setProfile(profileStored)
	}, [profileStored])

	const links =
		profile.name &&
		profile.links.map((e, key) => {
			let icon = brands[e.icon]

			return (
				<Button
					variant="outlined"
					className={styles.linkItem}
					href={e.url}
					target="_blank"
					rel="noreferrer"
					key={key}
				>
					<span className={styles.linkLogo}>
						<FontAwesomeIcon icon={icon} />
					</span>
				</Button>
			)
		})

	const copyToClipboardButton = () => {
		const handleClick = () => {
			setCopied(true)
			navigator.clipboard.writeText(profile.email)
			setTimeout(() => {
				setCopied(false)
			}, 2000)
		}

		return (
			<Tooltip
				title={copied ? 'email Copied' : 'Copy email'}
				TransitionComponent={Zoom}
				placement="top"
				arrow
			>
				<Button
					variant="outlined"
					className={styles.linkItem}
					onClick={handleClick}
				>
					<span className={styles.linkLogo}>
						{copied ? (
							<FontAwesomeIcon icon={faCheck} />
						) : (
							<FontAwesomeIcon icon={faPaperPlane} />
						)}
					</span>
				</Button>
			</Tooltip>
		)
	}

	return (
		<div className={styles.header}>
			<div className={styles.user}>
				<h2
					className={styles.name}
					onClick={() => {
						router.push('/')
					}}
				>
					{profile.name}
				</h2>
				<div className={styles.userInfo}>
					<h1 className={styles.title}>{profile.title}</h1>
					<h3 className={styles.subTitle}>{profile.subTitle}</h3>
				</div>
			</div>
			<StyledEngineProvider injectFirst>
				<div className={styles.links}>
					{links}
					{copyToClipboardButton()}
				</div>
			</StyledEngineProvider>
		</div>
	)
}

export default Header
