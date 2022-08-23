import React from 'react';

import { BsChevronDoubleDown as Chevron } from 'react-icons/bs';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import LogoPython from '../../../assets/logos/Python.png';
import LogoMatlab from '../../../assets/logos/Matlab.png';
import LogoReact from '../../../assets/logos/React.png';
import LogoOffice from '../../../assets/logos/MicrosoftOffice.png';
import LogoPHP from '../../../assets/logos/PHP.png';
import LogoDjango from '../../../assets/logos/Django.png';
import LogoOS from '../../../assets/logos/OS.png';
import LogoGit from '../../../assets/logos/Git.png';
import LogoAdobe from '../../../assets/logos/Adobe.png';
import LogoDB from '../../../assets/logos/DB.png';

import SkillInfo from './SkillInfo';

import './Skills.css';

const Skills = () => {


    const logos = [LogoReact, LogoDjango, LogoPython, LogoMatlab, LogoDB, LogoPHP, LogoGit, LogoAdobe, LogoOffice, LogoOS];

    const FlashcardInfo = SkillInfo()

    // const FlashcardInfo = {
    //     Titles: ["React","Django","Python","Matlab",
    //                 "Database","PHP","Version Control","Adobe",
    //                 "Microsoft Office","Operating System"],
    //     Information: [],
    //     Images: [["IMG_0012.jpg"],[],[],[],
    //                 [],[],[],[],
    //                 [],[],[],[] ]
    // }

    function Sample(logo, idx) {
        return (
          <Flippy
            key={idx}
            flipOnHover={false}
            flipOnClick={true} 
            flipDirection="horizontal"

            style={{ width: '215px', height: '325px' }}
        >
          <FrontSide style={{ border: '2px solid #1F1C17', backgroundColor: '#E8E6EA', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
            <img className="FlashcardLogo" alt="skill logo" src={logo}  height="25%" style={{ textShadow: '0px 0px 4px black'}}/>
          </FrontSide>
          <BackSide style={{ border: '2px solid #1F1C17', backgroundColor: '#E8E6EA', padding: "10px 5px 5px 5px" }}>
            <div className="FlashcardBack">
                <div className="FlashcardTitle">
                    <b><u>{FlashcardInfo.Titles[idx]}</u></b>
                </div>
                <div className="FlashcardImages" style={{  gridTemplateColumns: 'repeat('+FlashcardInfo.ImageProperties[idx][0]+', 1fr)', padding: '0 0 0 0', alignItems: 'center'   }}>
                    {FlashcardInfo.Images[idx].map((img, idx3) => (
                        <span key={idx3}><img className="FlashcardIcon" alt="skill logo" src={img} width={FlashcardInfo.ImageProperties[idx][1]+"%"}/>
                        </span>
                    )
                    )}
                </div>
                <div className="FlashcardBody">
                    <div className="FlashcardListBullet">
                        {FlashcardInfo.Information[idx].map((info, idx2) => (
                            <div key={idx2}>
                            <hr />
                            {info}
                            {/* <hr /> */}
                            </div>
                        ) 
                        )}
                    </div>
                </div>
                {/* <div className="FlashcardImages" style={{  gridTemplateColumns: 'repeat('+FlashcardInfo.ImageProperties[idx][0]+', 1fr)', padding: '0 0 0 0', alignItems: 'center'   }}>
                    {FlashcardInfo.Images[idx].map((img, idx3) => (
                        <span key={idx3}><img className="FlashcardIcon" alt="skill logo" src={img} width={FlashcardInfo.ImageProperties[idx][1]+"%"}/>
                        </span>
                    )
                    )}
                </div> */}
            </div>
          </BackSide>
        </Flippy>
        )
      }

    return(
        <div className="SkillsContainer" id="section3">
            <div className="SkillsCard">
                <div className="SkillsTitle">
                    <b>Technical Skills</b>
                </div>
                <div className="FlashcardContainer">
                    {logos.map((logo, idx) => 
                        Sample(logo, idx)
                        )}
                </div>
                <div className="DownArrowContainer">
                    <a href="#section4">
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

export default Skills;