import styles from "../styles/Header.module.css"
import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faDownload } from '@fortawesome/fontawesome-free-solid'
import { useRouter } from "next/router"
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux"
import { addUserToStore } from "@/reducers/users"
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'

function Header() {
    const router = useRouter()

    const dispatch = useDispatch()

    const addUser = (newUser) => {
        dispatch(addUserToStore(newUser))
    }
    const [copied, setCopied] = useState(false)
    useEffect(() => {
        fetch("arnaud-ulric-resume-backend-8ttemqtmi-aulric-ledger.vercel.app/users/arnaud.ulric@gmail.com").then(response => response.json()).then(data => {
            addUser(data.user)
        })
    }, [])

    const user = useSelector((state) => state.users.value)

    const links = user.links.map((e, key) => {
        let icon = brands[e.icon]

        return (
            <Button variant="outlined" className={styles.linkItem} href={e.url} target="_blank" rel="noreferrer" key={key} >
                <span className={styles.linkLogo}><FontAwesomeIcon icon={icon} /></span>
            </Button>
        )
    })

    const copyToClipboardButton = () => {
        const handleClick = () => {
            setCopied(true)
            navigator.clipboard.writeText(user.email)
            setTimeout(() => {
                setCopied(false)
              }, 2000)
        }

        return (
            <Tooltip title="Copy email" TransitionComponent={Zoom} placement="top" arrow>
                <Button variant="outlined" className={styles.linkItem} onClick={handleClick}>
                    <span className={styles.linkLogo}>
                        {copied ? 'Copied!' : <FontAwesomeIcon icon={faPaperPlane} />}
                    </span>
                </Button>
            </Tooltip>
        )
    }

    return (
        <div className={styles.header}>
            <div className={styles.user}>
                <h2 className={styles.name} onClick={() => {
                    router.push("/")
                }}>{user.name}</h2>
                <div className={styles.userInfo}>
                    <h1 className={styles.title}>{user.title}</h1>
                    <h3 className={styles.subTitle}>{user.subTitle}</h3>
                </div>
            </div>
            <div className={styles.links}>
                {links}
                {copyToClipboardButton()}
            </div>
        </div>
    )
}

export default Header