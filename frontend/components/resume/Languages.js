import styles from '../../styles/Experience.module.css'
import React from 'react'
import Image from 'next/image'

function Languages(props) {

    const languageList = props.props.map((e, key) => {
        return (
            <div className={styles.languageItem} key={key}>
                <span className={styles.languageName}>{e.name}</span>
                <span className={styles.languageLevel}>{e.level}</span>
            </div>
        )
    })

    return (
        <div className='container' id={styles.languagesContainer}>
            <Image className={styles.languageIcon} src='/languageIcon.jpg' width={40} height={40} alt='language' />
            {languageList}
        </div>
    )
}

export default Languages