import styles from '../styles/Home.module.css'
import Skills from './home/Skills'
import Description from './home/Description'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRouter } from "next/router"

function Home() {
    const router = useRouter()

    const buttons = [
        <Button key='1' className={styles.homeBtn} onClick={() => {
            router.push("/resume")
        }}>View Resume</Button>,
        <Button key='2' className={styles.homeBtn} onClick={() => {
            router.push("/portfolio")
        }}>Projects</Button>
    ]

    return (
        <main className="main" id={styles.main}>
            <Description />
            <div className={styles.rightContainer}>
                <Skills />
                <ButtonGroup
                    className={styles.btnGroup}
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text">
                    {buttons}
                </ButtonGroup>
            </div>
        </main>
    )
}

export default Home