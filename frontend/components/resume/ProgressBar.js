import React from 'react'
import styles from '../../styles/Resume.module.css'

const ProgressBar = (props) => {
    let xpLevel = 5
    let progressBar = (props.level / xpLevel) * 100 + '%'
    return (
        <div className={styles.item}>
            <span className={styles.itemName}>{props.name}</span>
            <span className={styles.itemLevel} style={{ width: progressBar }}></span>
        </div>
    )
}

export default ProgressBar
