import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const footer = () => {
    return(
    <div className="footerContainer">
        <footer className="footers">
            <IconContext.Provider value={{className: 'react-icons'}}>
                <a href="https://github.com/yangel20"><FaGithub/></a>
                &nbsp; &nbsp;
                <a href="https://www.linkedin.com/in/yangel-aguilera-558a17173"><FaLinkedin/></a>
             </IconContext.Provider>
        </footer>
    </div>
    )
}

export default footer