import styles from "../../styles/Portfolio.module.css"
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from "@mui/material/CardMedia"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Backdrop from "@mui/material/Backdrop"
import Fade from "@mui/material/Fade"
import { Button, CardActionArea, CardActions } from "@mui/material"

function Project(props) {
    const projects = props.props

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const links = projects.links.map((e, key) => {
        return (
        <Button href={e} key={key} variant="outlined">
            View code
        </Button>
        )
    })

    const ProjectModal = () => {
        return (
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500
                    }
                }}
            >
                    <Box sx={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: 800,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4
                        }}>
                            <h2 id="modal-title">{projects.name}</h2>
                            <p id="modal-description">{projects.desc}</p>
                    </Box>    
            </Modal>
        )
    }

    return (
        <>
            <Card sx={{ maxWidth: 400 }} className={styles.projectCard}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia component="img" sx={{ height: 200 }} image={`/${projects.image}`} alt={projects.name} />
                    <CardContent>
                        <h3 className={styles.projectName}>{projects.name}</h3>
                        {/* <p>{projects.desc}</p> */}
                        <span className={styles.tech}>{projects.techs}</span>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                {links}
                </CardActions>
            </Card>
            {open && <ProjectModal />}
        </>
    )

}

export default Project