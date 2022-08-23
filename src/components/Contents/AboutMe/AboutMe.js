import React from 'react';

import { BsChevronDoubleDown as Chevron } from 'react-icons/bs';

import './AboutMe.css';

const AboutMe = () => {
    return(
        <div className="AboutMeContainer" id="section2">
            <div className="AboutMeCard">
                <div className="AboutMeTitle">
                    About Me
                </div>
                <div className="AboutMeBody">
                    <div className="BodyLeft">
                        <div className="BodyLeftDescription">
                            My name is Michael Britton, and I've strived my entire life to be a versatile jack-of-all-trades.
                            I worked for 5 years at the Helen Wills Neuroscience Institute and Veterans Administration where I was a research assistant studying the effects of attention on working memory and rehabilitation.
                            Looking for a change of pace, I moved to Japan and became an English instructor, and part-time model.
                            I have worked with computers and been able to program since I was a child, and I have continually developed these skills up to today.
                        </div>
                        <div className="BodyLeftDetails">
                            This will be stats and details about me, not articulated in complete sentences.
                        </div>
                    </div>
                    <div className="BodyRight">
                        <div className="BodyRightTitle">
                            <b>Education</b>
                            <hr />
                        </div>
                        <div className="BodyRightSchool">
                            <div className="Row1">
                                <div className="Year">
                                    2002-2006
                                </div>
                                <div className="SchoolName">
                                    UC Berkeley
                                </div>
                                <div className="Location">
                                    Berkeley, CA
                                </div>
                            </div>
                            <div className="Row2">
                                <div className="Specialty">
                                    <i>Major: Cognitive Neuroscience</i>
                                </div>
                                <div className="Specialty">
                                    <i>Minor: Linguistics</i>
                                </div>
                            </div>
                            <div className="Row3">
                                <ul style={{ padding: "0 0 0 15px", margin: "0" }}>
                                    <li>
                                        Coursework included study of cognition through computer science, neurobiology, 
                                        psychology, philosophy, and linguistics. 
                                    </li>
                                    <li>
                                        Sample courses include artificial intelligence, discrete math, statistics,
                                        introduction to programming, neuroanatomy, mind and language, and theory of mind
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <hr /> */}

                        <div className="BodyRightSchool">
                            <div className="Row1">
                                <div className="Year">
                                    2001-2006  
                                </div>
                                <div className="SchoolName">
                                    West Hills College
                                </div>
                                <div className="Location">
                                    Lemoore, CA
                                </div>
                            </div>
                            <div className="Row2">
                                <div className="Specialty">
                                    <i>A+ Certification</i>
                                </div>
                            </div>
                            <div className="Row3">
                                <ul style={{ padding: "0 0 0 15px", margin: "0" }}>
                                    <li>A+ certification course, computer hardware and repair, web development, 
                                        design, HTML, and XML
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <hr /> */}

                        <div className="BodyRightSchool">
                            <div className="Row1">
                                <div className="Year">
                                    1998-2002
                                </div>
                                <div className="SchoolName">
                                    Hanford High School
                                </div>
                                <div className="Location">
                                    Hanford, CA
                                </div>
                            </div>
                            <div className="Row2">
                                <div className="Specialty">
                                    <i>High School Diploma</i>
                                </div>
                            </div>
                            <div className="Row3">
                                <ul style={{ padding: "0 0 0 15px", margin: "0" }}>
                                    <li>Advanced Placement (AP), honors, and general education</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DownArrowContainer">
                    <a href="#section3">
                        <Chevron 
                            className="ArrowDown"
                            color="#1F1C17" 
                            size="2em"
                        />
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default AboutMe;