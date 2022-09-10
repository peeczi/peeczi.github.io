import '../css/home.styles.css';
import React from 'react';
import Resume from './resume';

function Home({ onChange, contentType, resume }) {
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
        <div id="profile-pic"></div>
        {/* to display content selected from menu options */}
        <div id="content">
            <h2 className="title">{contentType.type === "resume" ? "Resume" : contentType.title}</h2>
            {
            contentType.type === "resume" ? 
                    <Resume resume={resume} />
            : 
            contentType.type === "intro" ?
                contentType.body.map((content, index) => {
                    return <p key={index} id={`intro${index}`} className="intro">{content}</p>
                })
                :
            contentType.type === "link" ?
                contentType.body.map((content, index) => {
                    return <p key={index} id={`link${index}`}>{content}</p>
                })
            :
            contentType.body.map((listItem, index) => {
                return <p key={index} className="content-item">
                    {listItem}
                    </p>
            })
            }
        </div>
        <div id="menu">
            <p id="skills" className="menu-item" onClick={onChange}>Skills</p>
            <p id="projects" className="menu-item" onClick={onChange}>Projects</p>
            <p id="resume" className="menu-item" onClick={onChange}>Resume</p>
            <p id="contact" className="menu-item" onClick={onChange}>Contact</p>
        </div>
            
    </div>
  )
}

export default Home