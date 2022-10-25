// import ReactCSSTransitionGroup from 'react-transition-group';
import '../css/home.styles.css';
import React from 'react';
import Resume from './resume';
import { motion, AnimatePresence } from "framer-motion";
import Transition from 'react-transition-group';
import { useState } from "react";
import Modal from "../components/modal.component";

function Home({ onChange, contentType, resume }) {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

  return (
    <div id="cover">
        <div id="first-name">
            <ul>
                <li>P</li>
                <li>e</li>
                <li>t</li>
                <li>e</li>
                <li>r</li>
            </ul>
        </div>
        <div id="last-name">
            <ul>
                <li>C</li>
                <li>z</li>
                <li>e</li>
                <li>r</li>
                <li>n</li>
                <li>i</li>
                <li>a</li>
                <li>k</li>
            </ul>
        </div>
        {/* profile picture */}
        <div id="profile-pic" onClick={onChange}></div>
        {/* to display content selected from menu options */}
        {/* <ReactCSSTransitionGroup
        transitionName='expand'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        > */}
        <div id="content">
            <h2 className="title">{contentType.type === "resume" ? "Resume" : contentType.title}</h2>
            {
            contentType.type === "resume" ? 
                    <Resume resume={resume} />
            : 
            contentType.type === "intro" ?
                contentType.body.map((content, index) => {
                    return <p key={index} id={`intro${index}`} className="intro-p">{content}</p>
                })
                :
            contentType.type === "link" ?
                contentType.body.map((content, index) => {
                    return <p key={index} id={`link${index}`} className="link-item">{content}</p>
                })
            :
            contentType.body.map((listItem, index) => {
                return <p key={index} className="content-item">
                    {listItem}
                    </p>
            })
            }
        </div>
        {/* </ReactCSSTransitionGroup> */}
        <div id="menu">
            <p id="skills" className="menu-item" onClick={onChange}>Skills</p>
            <p id="projects" className="menu-item" onClick={onChange}>Projects</p>
            <p id="resume" className="menu-item" onClick={() => (modalOpen ? close() : open())}>Resume</p>
            {/* <motion.button
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.8}}
                className="menu-item"
                onClick={() => (modalOpen ? close() : open())}
            >
                Resume
            </motion.button> */}
            <p id="contact" className="menu-item" onClick={onChange}>Contact</p>
        </div>
        <AnimatePresence
            // disable any initial animations when the component is first rendered
            initial={false}
            // finish exit animation before entering component is rendered
            //
            exitBeforeEnter={true}
            // fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
        >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
    </div>
  )
}

export default Home