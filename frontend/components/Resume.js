import styles from '../styles/Resume.module.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Experience from './resume/Experience'
import Technicals from './resume/Technicals'
import Diplomas from './resume/Diplomas'
import Languages from './resume/Languages'
import Divider from '@mui/material/Divider'
//import Button from '@mui/material/Button'
// import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone'
import Pdf from "./Pdf"
import { PDFDownloadLink } from '@react-pdf/renderer'

function Resume() {
    const [pdfFile, setPdfFile] = useState(false)
    const [experiences, setExperiences] = useState(null)
    const [diplomas, setDiplomas] = useState(null)
    const [technicals, setTechnicals] = useState(null)
    const [languages, setLanguages] = useState(null)

    const data = useSelector((state) => state.users.value)

    useEffect(() => {
        setDiplomas(data.diplomas)
        setExperiences(data.experiences)
        setTechnicals(data.expertises)
        setLanguages(data.languages)
        setPdfFile(<Pdf props={data} />)
    }, [data])

    return (
        <main className='main' id={styles.main}>
            <div className={styles.leftContainer}>
                {pdfFile &&
                    <PDFDownloadLink className={styles.downloadBtn} document={pdfFile} fileName="arnaud-ulric-resume.pdf" >
                        .Pdf
                    </PDFDownloadLink>
                }
                {languages && <Languages props={languages} />}
                {technicals && <Technicals props={technicals} />}
                {diplomas && <Diplomas props={diplomas} />}
            </div>
            <Divider style={{ margin: '0 40px' }} orientation='vertical' variant='middle' flexItem />
            <div className={styles.experiencesContainer}>
                <div className='box'>
                    {experiences && <Experience props={experiences} />}
                </div>
            </div>
        </main >
    )
}

export default Resume