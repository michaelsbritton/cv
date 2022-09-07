import React from 'react';
import Project from './Project';

import ProjectData from './ProjectInfo.json';
import './Projects.css';


const Projects = () => {

    return(
        <div className="ProjectsContainer" id="section6">
            <div className="ProjectsCard">
                <div className="ProjectsTitle">
                    <b>Projects</b>
                </div>
                {/* <div className="ProjectsGrid"> */}
                {ProjectData.Title.map((t, idx)=>
                    <>
                    <Project 
                        key={idx}
                        num={idx} 
                        title={t} 
                        image={ProjectData.Image[idx]} 
                        alt={ProjectData.Alt[idx]}
                        info={ProjectData.Information[idx]} 
                        link={ProjectData.Link[idx]} />
                    <br />
                    </>
                )}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Projects;