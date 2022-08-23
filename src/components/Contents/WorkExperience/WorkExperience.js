import React from 'react';

import { BsChevronDoubleDown as Chevron } from 'react-icons/bs';

import JobSlider from './JobSlider';

import WorkExperienceInfo from './WorkExperienceInfo';

import './WorkExperience.css';


const WorkExperience = () => {

    // const [job0, setJob0] = useState(false);
    // const [job1, setJob1] = useState(false);
    // const [job2, setJob2] = useState(false);
    // const [job3, setJob3] = useState(false);
    // const [job4, setJob4] = useState(false);

    const WorkExperienceData = WorkExperienceInfo();

    return(
        <div className="WorkExperienceContainer" id="section4">
            <div className="WorkExperienceCard">
                <div className="WorkExperienceTitle">
                    Work Experience
                </div>
                <div className="WorkExperienceBody">

                    {WorkExperienceData.Jobs.map((job, idx) =>
                        <JobSlider 
                            key={idx}
                            employer={WorkExperienceData.Employers[idx]}
                            job={job} 
                            info={WorkExperienceData.Information[idx]}   
                        />
                    )}

                    {/* <div className="Container">
                        <div className="Clicker" onClick={()=>setJob0(!job0)}>
                            <span className="Employer">{WorkExperienceData.Employers[0]}</span>
                            <span className="Job"><i>{WorkExperienceData.Jobs[0]}</i></span>
                        </div>
                        <div className="SliderWrapper">
                            <div className={job0 ? "PostSlider" : "PreSlider"}>
                                Information
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="Container">
                        <div className="Clicker" onClick={()=>setJob1(!job1)}>
                            <span className="Employer">{WorkExperienceData.Employers[1]}</span>
                            <span className="Job"><i>{WorkExperienceData.Jobs[1]}</i></span>
                        </div>
                        <div className="SliderWrapper">
                            <div className={job1 ? "PostSlider" : "PreSlider"}>
                                Information
                            </div>
                        </div>
                    </div>

                    <div className="Container">
                        <div className="Clicker" onClick={()=>setJob2(!job2)}>
                            <span className="Employer">{WorkExperienceData.Employers[2]}</span>
                            <span className="Job"><i>{WorkExperienceData.Jobs[2]}</i></span>
                        </div>
                        <div className="SliderWrapper">
                            <div className={job2 ? "PostSlider" : "PreSlider"}>
                                Information
                            </div>
                        </div>
                    </div>

                    <div className="Container">
                        <div className="Clicker" onClick={()=>setJob3(!job3)}>
                            <span className="Employer">{WorkExperienceData.Employers[3]}</span>
                            <span className="Job"><i>{WorkExperienceData.Jobs[3]}</i></span>
                        </div>
                        <div className="SliderWrapper">
                            <div className={job3 ? "PostSlider" : "PreSlider"}>
                                Information
                            </div>
                        </div>
                    </div>

                    <div className="Container">
                        <div className="Clicker" onClick={()=>setJob4(!job4)}>
                            <span className="Employer">{WorkExperienceData.Employers[4]}</span>
                            <span className="Job"><i>{WorkExperienceData.Jobs[4]}</i></span>
                        </div>
                        <div className="SliderWrapper">
                            <div className={job4 ? "PostSlider" : "PreSlider"}>
                                Information
                            </div>
                        </div>
                    </div> */}

                </div>
                <div className="DownArrowContainer">
                    <a href="#section5">
                        <Chevron 
                            className="DownArrow"
                            color="#E6E2EA" 
                            size="2em"
                        />
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default WorkExperience;