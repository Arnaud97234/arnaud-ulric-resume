import styles from '../styles/Experience.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
import ProgressBar from './progressBar'

function Experience() {

    const [exp, setExp] = useState([])
    const [techs, setTechs] = useState([])
    const [tools, setTools] = useState([])
    const [references, setReferences] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/experiences").then(response => response.json()).then(data => {
            setExp(data.experiences)
        })

        fetch("http://localhost:3000/expertises").then(response => response.json()).then(data => {
            let techs = data.expertises[0].techs
            let tools = data.expertises[0].tools
            setTechs(techs)
            setTools(tools)
        })

        fetch("http://localhost:3000/users/arnaud.ulric@gmail.com").then(response => response.json()).then(data => {
            let refs = data.user.diplomas
            setReferences(refs)
        })
    }, [])

    const expList = exp.map((e, key) => {
        let startMonth = new Date(e.startDate)
        startMonth = startMonth.getMonth()
        let startYear = new Date(e.startDate)
        startYear = startYear.getFullYear()
        let endMonth = new Date(e.endDate)
        endMonth = endMonth.getMonth()
        let endYear = new Date(e.endDate)
        endYear = endYear.getFullYear()

        let duration = new Date(e.endDate) - new Date(e.startDate)
        duration = Math.round(duration / (1000 * 3600 * 24 * 30.5 * 12))

        let formatedDesc = e.desc.map((e) => {
            return (
                <p>{e}</p>
            )
        })

        return (
            <div className='boxContent' key={key} id={styles.experienceBox}>
                <div className={styles.expTitle}>
                    <h3 className={styles.title}>{e.title}</h3>
                    <h4 className={styles.company}>{e.company}</h4>
                    <span className={styles.duration}>{startMonth}/{startYear} - {endMonth}/{endYear}</span>
                    <span>{duration} years</span>
                </div>
                <div className={styles.expDesc}>
                    {formatedDesc}
                </div>
            </div>
        )
    })

    const techsList = techs.map((e, key) => {
        return (
            <ProgressBar className={styles.item} key={key} level={e.level} name={e.name} />
        )
    })

    const toolsList = tools.map((e, key) => {
        return (
            <ProgressBar className={styles.item} key={key} level={e.level} name={e.name} />
        )
    })

    const referencesList = references.map((e) => {
        let dateMonth = new Date(e.date).getMonth()
        let dateYear = new Date(e.date).getFullYear()
        return (
            <div className='boxContent' id={styles.referenceBox}>
                <span className={styles.refTitle}>{e.title}</span>
                <span className={styles.refDate}>{dateMonth}/{dateYear}</span>
            </div>
        )
    })



    return (
        <>
            <main className='main' id={styles.main}>
                <div className={styles.leftContainer}>
                    <div className='container' id={styles.expertiseBox}>
                        <h2 className='subTitle'>Expertise</h2>
                        <div className='box'>
                            <div className='boxContent' id={styles.techsBox}>
                                <h3>Technologies</h3>
                                {techsList}
                            </div>
                            <div className='boxContent' id={styles.toolsBox}>
                                <h3>Tools</h3>
                                {toolsList}
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <h2 className='subTitle'>References</h2>
                        <div className='box'>
                            {referencesList}
                        </div>
                    </div>
                </div>
                <div className='container' id={styles.experienceContainer}>
                    <h2 className='subTitle'>Experience</h2>
                    <div className='box'>
                        {expList}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Experience