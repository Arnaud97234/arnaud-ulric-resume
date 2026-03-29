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
import { useMemo } from 'react'
import { formatDate, formatDuration } from './utils/utils'

function Experience() {
  const experience = useSelector((state) => state.resume.value.experiences)

  // Group experiences by company
  const groupedExperiences = useMemo(() => {
    return Object.values(
      (experience || []).reduce((acc, exp) => {
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

        // min startDate
        if (new Date(exp.startDate) < new Date(group.startDate)) {
          group.startDate = exp.startDate
        }

        // max endDate
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
      // sort experiences (latest first)
      group.company.experiences.sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      )
      return group
    })
  }, [experience])

  const experienceList = groupedExperiences.map(({ company: c }) => {
    const companyDuration = formatDuration(
      c.startDate,
      c.endDate || new Date()
    )

    return (
      <div className="box" key={c.name} id={styles.experienceBox}>
        
        {/* COMPANY HEADER */}
        <div className={styles.expTitle}>
          <Divider component="div" textAlign="left">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '10px 0px'
              }}
            >
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ marginRight: '15px' }}
              />

              {c.link ? (
                <Link
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ all: 'unset', cursor: 'pointer' }}
                >
                  <h4 className={styles.company}>{c.name}</h4>
                </Link>
              ) : (
                <h4 className={styles.company}>{c.name}</h4>
              )}

              <span className={styles.duration}>
                {`${formatDate(c.startDate)} - ${formatDate(c.endDate)} (${companyDuration})`}
              </span>
            </div>
          </Divider>
        </div>

        {/* EXPERIENCES */}
        {c.experiences.map((e) => {
          const duration = formatDuration(e.startDate, e.endDate)

          const formattedDesc = e.desc.map((d, i) => (
            <pre key={i} style={{ whiteSpace: 'pre-wrap' }}>
              {d}
            </pre>
          ))
          console.log(e)
          const formattedAchievements = e.achievements.map((a, key) => (
            <pre key={key} style={{ whiteSpace: 'pre-wrap' }}>{a}</pre>
          ))

          const techsList = e.techs.map((t, i) => {
            const iconSource = brands[t.icon] ? brands : regular

            return (
              <Tooltip
                key={i}
                TransitionComponent={Zoom}
                className={styles.expTechsItem}
                title={t.name}
                arrow
              >
                <FontAwesomeIcon icon={iconSource[t.icon]} />
              </Tooltip>
            )
          })

          return (
            <div key={e._id || e.title + e.startDate} style={{ marginTop: '15px' }}>
              <h3 className={styles.title}>{e.title}</h3>

              <span className={styles.duration}>
                {`${formatDate(e.startDate)} - ${formatDate(e.endDate)} (${duration})`}
              </span>

              <div className={styles.expDesc}>{formattedDesc}</div>
              <div className={styles.expAchievements}>
                <span>Achievements:</span>
                {formattedAchievements}
              </div> 
              <div className={styles.expTechs}>{techsList}</div>
            </div>
          )
        })}
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