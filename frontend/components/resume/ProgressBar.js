import React from 'react'
import styles from '../../styles/Resume.module.css'
import { StyledEngineProvider } from '@mui/material/styles'

const ProgressBar = (props) => {
    let xpLevel = 5
    let progressBar = (props.level / xpLevel) * 100 + '%'
    return (
        <StyledEngineProvider injectFirst>
        <div className={styles.item}>
            <span className={styles.itemName}>{props.name}</span>
            <span className={styles.itemLevel} style={{ width: progressBar }}></span>
        </div>
        </StyledEngineProvider>
    )
}

export default ProgressBar
