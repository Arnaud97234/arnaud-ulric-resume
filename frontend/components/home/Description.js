import styles from '../../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles'

function Description() {

    const [desc, setDesc] = useState([])
    const data = useSelector((state) => state.users.value)

    useEffect(() => {
        setDesc(data.desc)
    }, [data])

    const formatedDesc = desc.map((e, key) => {
        return (
            <p key={key}>{e}</p>
        )
    })

    return (
        <StyledEngineProvider injectFirst>
        <div className='container' id={styles.introContainer}>
            {formatedDesc}
        </div>
        </StyledEngineProvider>
    )
}

export default Description