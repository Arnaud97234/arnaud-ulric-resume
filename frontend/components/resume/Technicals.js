import styles from '../../styles/Resume.module.css'
import ProgressBar from './ProgressBar'

function Technicals(props) {

    const techsList = props.props.techs.map((e, key) => {
        return (
            <ProgressBar className={styles.item} key={key} level={e.level} name={e.name} />
        )
    })

    const toolsList = props.props.tools.map((e, key) => {
        return (
            <ProgressBar className={styles.item} key={key} level={e.level} name={e.name} />
        )
    })

    return (
        <div className='container' id={styles.expertiseBox}>
            <div className='box'>
                <div className='boxContent' id={styles.techsBox}>
                    <h2 className='subTitle'>Technologies</h2>
                    {techsList}
                </div>
                <div className='boxContent' id={styles.toolsBox}>
                    <h2 className='subTitle'>Tools</h2>
                    {toolsList}
                </div>
            </div>
        </div>
    )
}

export default Technicals