import React, {useState, useEffect, Fragment} from 'react'
import '../../css/resume.styles.css';
import BulletPoint from '../../components/bullet-point.component';

function Resume({resume}) {
    const [workXP, setWorkXP] = useState();
    useEffect(() => {
        for (let element in resume.Work){
            setWorkXP(resume.Work[element]);
        }
    }, [])

    const jobs = [];
    resume.Work.forEach((work) => {
        for (let element in work) {
            console.log(`for loop; work %c${work[element]}`,'color:yellow');
            if (Array.isArray(work[element])){
                console.log(`work[element] is an array of; %c${Object.values(work[element])}`,'color:green');
                work[element].forEach((duty) => {
                    console.log(`duty: %c${duty}`,'color:pink');
                    // jobs.push(duty);
                    jobs.push(`> ${duty}`);
                })
                // jobs.push(Object.values(work[element]));
            } else {
                jobs.push(work[element]);
            }
        }
        console.log(`resume.Work.forEach jobz: %c${Object.values(jobs)}`,'color:red');

    })

    console.log(`jobsss: %c${workXP}`,'color:red');

    function jobResponsibilities(job) {
        for (let property of job) { 
            console.log(`job[property] ${job[property]}`);
            return job[property] ;
        }
    }

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