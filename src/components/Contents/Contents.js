import React from 'react';

import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import WorkExperience from './WorkExperience/WorkExperience';
import PubAndPres from './PubAndPres/PubAndPres';
import Projects from './Projects/Projects';

import './Contents.css';

const Contents = () => {
    return(
        <div className="ContentsContainer">
            <Home />
            <AboutMe />
            <Skills />
            <WorkExperience />
            <PubAndPres />
            <Projects />
            {/* <div className="Section3" id="section3">This is section 3</div> */}
        </div>
    )
}

export default Contents;