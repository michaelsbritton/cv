import React from 'react';

import { BsChevronDoubleDown as Chevron } from 'react-icons/bs';

import MyPic from '../../../assets/profile_photos/IMG_1926_3.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="HomeContainer" id="section1">
            <div className="HomeCard">
                <div className="ImageContainer">
                    <img alt="It's Me" src={MyPic} />
                </div>
                <div className="NameContainer">
                    <span className="FirstName"><b>MICHAEL</b></span> 
                    <span className="LastName"><b> BRITTON</b></span>
                </div>
                <div className="ButtonContainer">
                    <button className="HomeButton">Download Resume</button>
                    {/* <button className="HomeButton">Contact Me</button> */}
                </div>
                <div className="DownArrowContainer">
                    <a href="#section2">
                        <Chevron 
                            className="DownArrow"
                            color="#E8E6EA" 
                            size="2em"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;