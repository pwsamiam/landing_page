import React from 'react';

const FooterContainer = () => { 
      return(
  	     <div className='contact-container2'>
		         <div className="column-footer" id="column-footer">      
			           <div>
				              <small>&copy; Jack's Creek Productions All Rights Reserved. <p>Design by: <a href="https://jacks-creek.com/">Jack's Creek Productions</a> | Banner image by: <a href="https://jacks-creek.com">jacks-creek.com</a></p></small>    
	                 <small> <p>*Disclaimer: All opinions and commentary are solely that of www.jacks-creek.com</p></small>			                    
                  <small> <p>Contact: <a href="mailto:adminvps@jacks-creek.com"> adminvps@jacks-creek.com</a></p></small>
                  <p><a href="https://twitter.com/JacksCreekcom"><input type="image" src={require('../images/twitterFooter.webp')} id="twitter" title="Twitter" alt="Twitter" /></a>
                  <a href="https://github.com"><input type="image" src={require('../images/github32.png')} id="github" title="Github" alt="Github" /></a></p>                  
              </div>   
		        </div>
        </div>	   
      );
};

export default FooterContainer;
