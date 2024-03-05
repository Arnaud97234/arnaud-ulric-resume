import styles from '../../styles/Resume.module.css'

function Diplomas(props) {

    const referencesList = props.props.map((e, key) => {
        let dateMonth = new Date(e.date).getMonth()
        let dateYear = new Date(e.date).getFullYear()

        return (
            <div className='boxContent' id={styles.referenceBox} key={key}>
                <span className={styles.refTitle}>{e.title}</span>
                <span className={styles.refDate}>{dateMonth}/{dateYear}</span>
            </div>
        )
    })


    return (
        <div className='container' id={styles.diplomasContainer}>
            <div className='box'>
                <h2 className='subTitle'>References</h2>
                <div className={styles.box}>
                    {referencesList}
                </div>
            </div>
        </div>
    )
}

export default Diplomas