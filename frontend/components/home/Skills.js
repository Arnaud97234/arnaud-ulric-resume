import styles from '../../styles/Home.module.css'
import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as regular from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function Skills() {

    const [skills, setSkills] = useState([])
    const data = useSelector((state) => state.users.value)

    useEffect(() => {
        setSkills(data.skills)
    }, [data])

    const skillsList = skills.map((e, key) => {
        let iconSource
        if (brands[e.icon]) {
            iconSource = brands
        } else {
            iconSource = regular
        }
        return (
            <div className={styles.skill} key={key}>
                <span className={styles.skillItem} key={key}>{e.name}</span>
                <FontAwesomeIcon className={styles.skillItem} icon={iconSource[e.icon]} />
            </div>
        )
    })

    return (
        <div className='container' id={styles.skillsContainer}>
            {skillsList}
        </div>
    )
}

export default Skills