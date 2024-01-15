import styles from "../styles/Header.module.css"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faDownload } from '@fortawesome/fontawesome-free-solid'
import { useRouter } from "next/router";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { addUserToStore } from "@/reducers/users"
import Pdf from "./Pdf"

function Header() {
    const router = useRouter();

    const dispatch = useDispatch()

    const addUser = (newUser) => {
        dispatch(addUserToStore(newUser))
    }
    const [copied, setCopied] = useState(false)
    const [pdfFile, setPdfFile] = useState(false)
    useEffect(() => {
        fetch("http://localhost:3000/users/arnaud.ulric@gmail.com").then(response => response.json()).then(data => {
            addUser(data.user)
            setPdfFile(<Pdf props={data.user} />)
        })
    }, [])
    const user = useSelector((state) => state.users.value)

    const getLink = user.links.map((e, key) => {
        let icon = brands[e.icon]

        return (
            <Link className={styles.contactItem} href={e.url} target="_blank" rel="noreferrer" key={key} >
                <span className={styles.contactTitle}>{e.name}</span>
                <span className={styles.contactLogo}><FontAwesomeIcon icon={icon} /></span>
            </Link>
        )
    })

    return (
        <>
            <div className={styles.header}>
                <div className={styles.user}>
                    <Image className={styles.userPicture} src='/userPicture.jpg' width={180} height={180} alt='user' />
                    <div className={styles.userInfo}>
                        <h1 className={styles.name}>{user.name}</h1>
                        <h2 className={styles.title}>{user.title}</h2>
                        <h3 className={styles.subTitle}>{user.subTitle}</h3>
                    </div>
                    <div className={styles.contact}>
                        {getLink}
                        <CopyToClipboard className={styles.contactItem} text={user.email} onCopy={() => setCopied(true)}>
                            <span className={styles.contactTitle}>{copied ? 'Copied!' : 'e-mail'}<FontAwesomeIcon className={styles.contactLogo} icon={faPaperPlane} /></span>
                        </CopyToClipboard>
                        <button className={styles.downloadBtn}>
                            {pdfFile && pdfFile}
                            {/* <span className={styles.contactLogo}><FontAwesomeIcon icon={faDownload} /></span> */}
                        </button>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <span className={styles.navItem} onClick={() => {
                        router.push("/")
                    }}>Home</span>
                    <span className={styles.navItem} onClick={() => {
                        router.push("/experience")
                    }}>Experience</span>
                    <span className={styles.navItem} onClick={() => {
                        router.push("/portfolio")
                    }}>Portfolio</span>
                </div>
            </div>
        </>
    )
}

export default Header