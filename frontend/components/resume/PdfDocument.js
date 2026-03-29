'use client'
import React from 'react'
import {
	Page,
	Text,
	View,
	Link,
	Document,
	StyleSheet
} from '@react-pdf/renderer'
import { formatDate, formatDuration } from './utils/utils'


function PdfDocument(props) {
	const styles = StyleSheet.create({
		page: {
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			padding: '25px',
			color: 'var(--color-2)',
			fontFamily: 'Times-Roman'
		},
		name: {
			fontSize: '14px',
			paddingBottom: '8px'
		},
		title: {
			fontSize: '13px',
			paddingBottom: '6px'
		},
		subTitle: {
			fontSize: '10px'
		},
		left: {
			width: '28%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'center',
			paddingRight: '6px',
			borderRight: '.25px',
			color: 'var(--color-2)'
		},
		right: {
			width: '72%',
			paddingLeft: '6px',
			borderLeft: '.25px',
			color: 'var(--color-2)'
		},
		experiences: {
			display: 'flex',
			flexDirection: 'column'
		},
		experience: {
			paddingVertical: '4px'
		},
		contactItem: {
			fontSize: '9px'
		},
		desc: {
			fontSize: '8px',
			justifyContent: 'center',
			padding: '4px'
		},
		secondaryTitle: {
			fontSize: '10px',
			paddingBottom: '12px',
			alignSelf: 'center',
			textTransform: 'uppercase'
		},
		experiencetitle: {
			fontSize: '10px'
		},
		duration: {
			fontSize: '8px',
			paddingLeft: '4px'
		},
		leftItem: {
			fontSize: '9px',
			paddingVertical: '2px'
		},
		company: {
			fontSize: '9px'
		},
		leftBox: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		separator: {
			height: '.5px',
			backgroundColor: 'var(--color-2)',
			marginVertical: '20px',
			width: '90%'
		},
		diploma: {
			paddingBottom: '4px'
		},
		refTitle: {
			fontSize: '9px'
		}
	})

	const profile = props.profile
	const resume = props.resume

	// ✅ NORMALIZE DATA (handles both flat + already grouped)
	const flatExperiences = (resume.experiences || []).flatMap((e) => {
		if (e?.company?.experiences) {
			// already grouped → flatten
			return e.company.experiences.map((exp) => ({
				...exp,
				company: {
					name: e.company.name,
					link: e.company.link
				}
			}))
		}
		return e
	})

	// ✅ GROUP AGAIN (safe now)
	const groupedExperiences = Object.values(
		flatExperiences.reduce((acc, exp) => {
			const key = exp.company.name

			if (!acc[key]) {
				acc[key] = {
					company: {
						name: exp.company.name,
						link: exp.company.link,
						startDate: exp.startDate,
						endDate: exp.endDate || new Date().toISOString(),
						experiences: []
					}
				}
			}

			const group = acc[key].company
			const expEnd = exp.endDate || new Date().toISOString()

			if (new Date(exp.startDate) < new Date(group.startDate)) {
				group.startDate = exp.startDate
			}

			if (new Date(expEnd) > new Date(group.endDate)) {
				group.endDate = expEnd
			}

			group.experiences.push({
				...exp,
				endDate: expEnd
			})

			return acc
		}, {})
	).map((group) => {
		group.company.experiences.sort(
			(a, b) => new Date(b.startDate) - new Date(a.startDate)
		)
		return group
	})

	let experiences = groupedExperiences.map((companyGroup, key) => {
		const c = companyGroup.company

		const companyDuration = formatDuration(
			c.startDate,
			c.endDate || new Date()
		)

		return (
			<View style={styles.experience} key={key}>
				<View style={styles.head}>
					<View
						style={[
							{ flexDirection: 'row' },
							{ alignItems: 'center' }
						]}
					>
						<Text style={styles.experiencetitle}>{c.name}</Text>
						<Text style={styles.duration}>
							{formatDate(c.startDate)} - {formatDate(c.endDate)} ({companyDuration})
						</Text>
					</View>
				</View>

				{c.experiences.map((experience, i) => {
					let formatedDesc = experience.desc.map((e, key) => {
						return (
							<Text style={styles.formatedDesc} key={key}>
								{e}
							</Text>
						)
					})

					let duration = formatDuration(
						experience.startDate,
						experience.endDate
					)

					return (
						<View key={i} style={{ marginTop: 4 }}>
							<View
								style={[
									{ flexDirection: 'row' },
									{ alignItems: 'center' }
								]}
							>
								<Text style={styles.experiencetitle}>
									{experience.title}
								</Text>
								<Text style={styles.duration}>
									{formatDate(experience.startDate)} - {formatDate(experience.endDate)} ({duration})
								</Text>
							</View>
							<View style={styles.desc}>{formatedDesc}</View>
						</View>
					)
				})}
			</View>
		)
	})

	// rest unchanged...

	const techs = resume.expertises[0].techs.map((e, key) => (
		<Text style={styles.leftItem} key={key}>
			{e.name}
		</Text>
	))

	const tools = resume.expertises[0].tools.map((e, key) => (
		<Text style={styles.leftItem} key={key}>
			{e.name}
		</Text>
	))

	const references = resume.diplomas.map((e, key) => (
		<View style={styles.diploma} key={key}>
			<Text style={styles.refTitle}>{e.title}</Text>
		</View>
	))

	return (
		<Document style={styles.main}>
			<Page style={styles.page}>
				<View style={styles.left}>
					<View style={styles.leftBox}>
						<Text style={styles.name}>{profile.name}</Text>
						<Text style={styles.title}>{profile.title}</Text>
						<Text style={styles.subTitle}>{profile.subTitle}</Text>
					</View>
					<View style={styles.separator}></View>
					<View style={styles.leftBox}>
						<Text style={styles.secondaryTitle}>Contact me</Text>
						<Text style={styles.leftItem}>{profile.email}</Text>
						<Link style={styles.leftItem} href="https://arnaud-ulric.vercel.app/">
							myWebsite.url
						</Link>
					</View>
					<View style={styles.separator}></View>
					<View style={styles.leftBox}>
						<Text style={styles.secondaryTitle}>Skills</Text>
						{techs}
						<Text style={[styles.secondaryTitle, { paddingTop: '24px' }]}>
							Tools
						</Text>
						{tools}
					</View>
					<View style={styles.separator}></View>
					<View style={styles.leftBox}>
						<Text style={styles.secondaryTitle}>Diplomas</Text>
						{references}
					</View>
				</View>
				<View style={styles.right}>
					<View style={styles.experiences}>
						<Text style={styles.secondaryTitle}>Experience</Text>
						{experiences}
					</View>
				</View>
			</Page>
		</Document>
	)
}

export default PdfDocument