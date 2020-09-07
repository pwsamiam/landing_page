import React from "react";

const Header = () =>{
    return(
        <div className='header' >
            <span className='header-title'>               
                <i>Jack's Creek Productions</i> 
            </span>
            <br/>
            <span className="header-text">
                <a href="https://reactjs.org/"> <input type="image" src={require('../images/logo48White.webp')}  id="logo" title="Made with React" alt="React" /></a>
                <div id="subtitle">Blending nature and tech...</div>
            </span>
            <span className="header-right">
                <a href="https://jacks-creek.com">Home</a>
                <a href="https://pwsamiam.github.io/landing_page/">About</a>
            </span>                      
        </div>
    );
};

export default Header;
