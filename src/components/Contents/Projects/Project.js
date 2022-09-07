import React from 'react';
// import Ratchecker from '../../../assets/projects/Ratchecker_Home.png';
import './Project.css';

import ImgRatchecker from '../../../assets/projects/RatcheckerHome.png';
import ImgEDECO from '../../../assets/projects/EDECOFlashcard.png';
import ImgHomework from '../../../assets/projects/HomeworkBookReport.png';

const Project = (props) => {
    
    const imageNames = [ImgRatchecker, ImgEDECO, ImgHomework];

    const images = require.context('../../../assets/projects/', true);
    const image  = images(`./${props.image}`).default;
    
    const imagePath = ('../../..assets/projects/' + props.image)
    console.log("MB: Path: '../../../assets/projects/" + props.image)


    return(
        <div className="ProjectContainer">
            <div className="ProjectTitle">
                <h3>{props.title}</h3>
            </div>
            <div className="ProjectImageDescriptionContainer">
                <div className="ProjectImage">
                    <img src={imageNames[props.num]} alt={props.alt}/>
                </div>
                <div className="ProjectDescription">
                    <ul style={{ listStyle: "none" }}>
                        {props.info.map((i, idx)=>
                            <>
                            <li key={idx}>{i}</li>
                            <br />
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <div className="ProjectLink">
                {props.link}
            </div>
        </div>
    )
}

export default Project;