import React from 'react'
import '../css/resume.styles.css';
import BulletPoint from '../components/bullet-point.component';

function Resume({resume}) {

    const jobs = [];
    resume.Work.forEach((work) => {
        for (let element in work) {
            if (Array.isArray(work[element])){                
                work[element].forEach((duty) => {
                    jobs.push(`> ${duty}`);
                })
            } else {
                jobs.push(work[element]);
            }
        }
    })

  return (
    <div id="resumee">
          <h3 className="resume-name">{resume.name}</h3>
        {Object.values(resume.header).map((header, index) => {
            return <li key={index} className="resume-address">{header}</li>
        })}
          <h3 className="resume-header">Objective</h3>
        <p>{resume.Objective}</p>
          <h3 className="resume-header">Skills</h3>
        <ul>
            {resume.Skills.map((skill, index) => {
                return <li key={index} className="resume-item"><BulletPoint/>{skill}</li>
            })}
        </ul>
          <h3 className="resume-header">Work Experience</h3>
        {jobs.map((job, index) => {
            if (index === 0) {
                return <li key={index} style={{ fontStyle: "italic", textShadow: "2px -2px 3px black" }}>{job}</li>    
            } else if (index === 5 || index === 10 || index === 18 || index === 25 || index === 29){
                return <li key={index} style={{ fontStyle: "italic", textShadow: "1px -1px 3px black"}}><br></br>{job}</li>    
            }
            return <li key={index}>{job}</li>
        })}
          <h3 className="resume-header">Education</h3>
        {resume.education.map((ed, index) => {
            // return <p key={index} className="resume-item">{index} {Object.values(ed)}</p>
            return <p key={index} className="resume-item">{ed.subject}<br></br>{ed.institution}<br></br>{ed.location}<br></br>{ed.date}</p>
        })}
    </div>
  )
}
            

export default Resume