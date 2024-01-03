import styles from "../styles/Header.module.css"
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faDownload } from '@fortawesome/fontawesome-free-solid'
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'

function Header() {

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [links, setLinks] = useState([])

    const router = useRouter();

    useEffect(() => {
        fetch("http://localhost:3000/users/arnaud.ulric@gmail.com").then((response) => response.json()).then(data => {
            const user = data.user
            setName(user.name)
            setTitle(user.title)
            setSubTitle(user.subTitle)
            setLinks(user.links)
        })
    }, [])

    const getLink = links.map((e, key) => {
        let icon = e.icon
        return (
            <Link className={styles.contactItem} href={e.url} target="_blank" rel="noreferrer" key={key} >
                <span className={styles.contactTitle}>{e.name}</span>
                <span className={styles.contactLogo}><FontAwesomeIcon icon={icon} /></span>
            </Link>
        )
    })

    return (
        <div className={styles.header}>
            <div className={styles.user}>
                <Image className={styles.userPicture} src='/userPicture.jpg' width={180} height={180} />
                <div className={styles.userInfo}>
                    <h1 className={styles.name}>{name}</h1>
                    <h2 className={styles.title}>{title}</h2>
                    <h3 className={styles.subTitle}>{subTitle}</h3>
                </div>
                <div className={styles.contact}>
                    {getLink}
                    <div className={styles.contactItem}>
                        <span className={styles.contactTitle}>e-mail</span>
                        <span className={styles.contactLogo}><FontAwesomeIcon icon={faPaperPlane} /></span>
                    </div>
                    <button className={styles.downloadBtn}>
                        <span className={styles.contactTitle}>.pdf</span>
                        <span className={styles.contactLogo}><FontAwesomeIcon icon={faDownload} /></span>
                    </button>
                </div>
            </div>
            <div className={styles.navigation}>
                <span className={styles.navItem} onClick={() => {
                    router.push("/");
                }}>Home</span>
                <span className={styles.navItem} onClick={() => {
                    router.push("/experience");
                }}>Experience</span>
                <span className={styles.navItem} onClick={() => {
                    router.push("/portfolio");
                }}>Portfolio</span>
            </div>
        </div>
    )
}

export default Header