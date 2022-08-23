import React, { useState } from 'react';

import './JobSlider.css';


const JobSlider = (props) => {

    const employerName = props.employer;
    const jobName = props.job;
    const info = props.info;

    const [toggleSlide, setToggleSlide] = useState(false);

    const handleClick = () => {
        let updateToggleSlide = toggleSlide;
        updateToggleSlide = !updateToggleSlide;
        setToggleSlide(updateToggleSlide);
    }

    return(
        <div className="Container">
            <div className="Clicker" onClick={handleClick}>
                <span className="Employer">{employerName}</span>
                <span className="Job"><i>{jobName}</i></span>
            </div>
            <div className="SliderWrapper">
                <div className={toggleSlide ? "PostSlider" : "PreSlider"}>
                    {info}
                </div>
            </div>
        </div>
    )
}

export default JobSlider;