import React from 'react';
// import Ratchecker from '../../../assets/projects/Ratchecker_Home.png';
import './Project.css';

const Project = (props) => {
    
    const images = require.context('../../../assets/projects/', true);
    const image  = images(`./${props.image}`).default;
    
    return(
        <div className="ProjectContainer">
            <div className="ProjectTitle">
                <h3>{props.title}</h3>
            </div>
            <div className="ProjectImageDescriptionContainer">
                <div className="ProjectImage">
                    <img src={image} alt={props.alt}/>
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