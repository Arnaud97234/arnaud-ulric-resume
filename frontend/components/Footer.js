import styles from "../styles/Footer.module.css"
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge } from '@fortawesome/fontawesome-free-solid'

function Footer() {

    return (
        <div className={styles.footer}>
            <span className={styles.icon}><FontAwesomeIcon icon={faIdBadge} /></span>
            <span className={styles.signature}>Arnaud97234 - 2024</span>
        </div>
    )
}

export default Footer