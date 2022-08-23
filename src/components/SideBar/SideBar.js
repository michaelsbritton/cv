import React from 'react';

// import MyLogo from '../../assets/logo_draft_no_color_opt.svg';
// import {ReactComponent as MyLogoMB} from '../../assets/logo_draft3_MB.svg';
import {ReactComponent as MyLogo} from '../../assets/logo2_3.svg';
import './SideBar.css';


const SideBar = () => {

    // const [showLogo, setShowLogo] = useState(false);

    // const mbOn = () => {
    //     setShowLogo(true);
    // }

    // const mbOff = () => {
    //     setShowLogo(false);
    // }

    return(
        <div className="SideBarContainer" >
            <div className="Logo">
                <div className="LogoText">
                    <span className="LogoM">M</span>
                    <span className="LogoB">B</span>
                </div>
                {/* {showLogo &&
                    <MyLogoMB width='150' height='150' />
                } */}
                {/* {!showLogo && */}
                    <MyLogo className="LogoImg" fill='none' stroke='white' width='150' height='150' />
                {/* } */}
            </div>
            <ul>
                <li><a href="#section1">Home</a></li>
                <hr className="HRDivider"/>
                <li><a href="#section2">About Me</a></li>
                <hr className="HRDivider"/>
                <li><a href="#section3">Technical Skills</a></li>
                <hr className="HRDivider"/>
                <li><a href="#section4">Work Experience</a></li>
                <hr className="HRDivider"/>
                <li><a href="#section5">Publications</a></li>
                <hr className="HRDivider"/>
                <li><a href="#section6">Projects</a></li>
                <hr className="HRDivider"/>
            </ul>
        </div>
    )
}

export default SideBar;