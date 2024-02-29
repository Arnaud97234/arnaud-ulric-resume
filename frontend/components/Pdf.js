import { PDFDownloadLink, Link, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import React, { useState, useEffect } from "react"
// import { PDFDownloadLink } from '@react-pdf/renderer'

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
        fontSize: '9px',
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
        width: '90%',
    },
    diploma: {
        paddingBottom: '4px'
    },
    refTitle: {
        fontSize: '9px'
    }
})

function Pdf(props) {
    let data = props.props
    const [pdfFile, setPdfFile] = useState(false)
    useEffect(() => {
        setPdfFile(data)
    }, [data])

    let experience = data.experiences.map((e, key) => {
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

        let formatedDesc = e.desc.map((e, key) => {
            return (
                <Text style={styles.formatedDesc} key={key}>{e}</Text>
            )
        })

        return (
            <View style={styles.experience} key={key}>
                <div style={styles.head}>
                    <div style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
                        <Text style={styles.experiencetitle}>{e.title}</Text>
                        <Text style={styles.duration}>{startMonth}/{startYear} - {endMonth}/{endYear} ({duration} years)</Text>
                    </div>
                    <Text style={styles.company}>{e.company}</Text>
                </div>
                <div style={styles.desc}>
                    {formatedDesc}
                </div>
            </View>
        )
    })

    const techs = data.expertises.techs.map((e, key) => {
        return (
            <Text style={styles.leftItem} key={key}>{e.name}</Text>
        )
    })

    const tools = data.expertises.tools.map((e, key) => {
        return (
            <Text style={styles.leftItem} key={key}>{e.name}</Text>
        )
    })

    const references = data.diplomas.map((e, key) => {
        return (
            <div style={styles.diploma} key={key}>
                <Text style={styles.refTitle}>{e.title}</Text>
            </div>
        )
    })

    const file = () => {
        return(
        <Document style={styles.main}>
            <Page style={styles.page}>
                <div style={styles.left}>
                    <View style={styles.leftBox}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.subTitle}>{data.subTitle}</Text>
                    </View>
                    <span style={styles.separator}></span>
                    <View style={styles.leftBox}>
                        <Text style={styles.secondaryTitle}>Contact me</Text>
                        <Text style={styles.leftItem}>{data.email}</Text>
                        <Link style={styles.leftItem} href='http://localhost:3001/'>myWebsite.url</Link>
                    </View>
                    <span style={styles.separator}></span>
                    <View style={styles.leftBox}>
                        <Text style={styles.secondaryTitle}>Skills</Text>
                        {techs}
                        <Text style={[styles.secondaryTitle, { paddingTop: '24px' }]} >Tools</Text>
                        {tools}
                    </View>
                    <span style={styles.separator}></span>
                    <View style={styles.leftBox}>
                        <Text style={styles.secondaryTitle}>Diplomas</Text>
                        {references}
                    </View>
                </div>
                <div style={styles.right}>
                    <View style={styles.experiences}>
                        <Text style={styles.secondaryTitle}>Experience</Text>
                        {experience}
                    </View>
                </div>
            </Page>
        </Document>
        )
    }

    return (
        pdfFile &&
        <PDFDownloadLink className={styles.downloadBtn} document={file} fileName="arnaud-ulric-resume.pdf">
            <span>.pdf</span>
        </PDFDownloadLink>
    )
}

export default Pdf
