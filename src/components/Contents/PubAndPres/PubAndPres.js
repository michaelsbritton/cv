import React from 'react';

import { BsChevronDoubleDown as Chevron } from 'react-icons/bs';

import './PubAndPres.css';

const PubAndPres = () => {

    const PubAndPresData = ["Chen AJ-W, Britton M, Turner GR, Vytlacil J, Thompson TW and D'Esposito M Goal-directed attention alters the tuning of object-based representations in extrastriate cortex. Frontiers in Human Neuroscience. 6:187. 2012 June.",
                            "Chen A J-W, Nycum T, Britton M, D’Esposito M. (2008). Neural bases of goal-directed selection of information for working memory. Presented at the Cognitive Neuroscience Society, San Francisco CA.",
                            "Britton M, Chen A J-W, Hoffman J, Gibbs S, Shanholtzer M, D'Esposito M. (2007). Modulation of dopamine function alters attentional control of visual processing. Presented at the Annual Meeting of Society for Neuroscience, San Diego CA.",
                            "Chen A J-W, Thompson T, Britton M, D’Esposito, M. (2007). A Mechanism of Top-Down Control Over Information Processing by Selective Attention. Presented at the Annual Meeting of Cognitive Neuroscience Society, New York, NY.",
                            "Chen A J-W, Britton M, Thompson T, Nir T, Fegen D, Hoffman J, Barackman M, D'Esposito M. (2007). Sharpening of neural representations: A mechanism of top-down control over information processing by selective attention. Presented at Bay Area Neuroscience Gathering, San Francisco, CA.",
                            "Chen A J-W, Thompson T, Britton M, Nycum T, D'Esposito M. (2006). Differences in fMRI Indices of Inter-regional Neural Interactions. Presented at the Annual Meeting of the Society for Neuroscience, Atlanta, GA.",
    ]

    return(
        <div className="PubAndPresContainer" id="section5">
            <div className="PubAndPresCard">
                <div className="PubAndPresTitle">
                    Publications and Presentations
                </div>
                <ul>
                {PubAndPresData.map((pub, idx)=>
                    <li key={idx}>{pub}</li>
                )}
                </ul>
                
                <div className="DownArrowContainer">
                    <a href="#section5">
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

export default PubAndPres;