import React from "react";
import "./styles.css";

export default function App() {
  return(
     <div>
         <Header/> 
         <div  className='hero-image'>   
            <Card 
                className='section'
                //img='./logo48Gray.webp'    
                title="About Us" 
                description="Established in Kentucky for thousands of years. Ok, since 2014, but we can hope."
            />

            <Card 
                className='section'
                //img='./logo48Gray.webp' 
                title='Our Values'
                description='We remember when the earth was green.'
            />

            <Card 
                className='section'
                //img='./logo48Gray.webp'
                title='Our Mission' 
                description='To collect, visualize, and disseminate information.'
            />
            <ContactContainer/>
            <FooterContainer/>
        </div>
   </div>  
  );
}

const Header = () =>{
    return(
        <div className='header' >
            <span className='header-title'>               
                <i>Jack's Creek Productions</i> 
            </span>
            <br/>
            <span className="header-text">
                <a href="https://reactjs.org/"> <input type="image" src={require('./images/logo48White.webp')}  id="logo" title="Made with React" alt="React" /></a>
                <div id="subtitle">Blending nature and tech...</div>
            </span>
            <span className="header-right">
                <a href="https://jacks-creek.com">Home</a>
                <a href="https://pwsamiam.github.io/landing_page/">About</a>
            </span>                      
        </div>
    );
}


const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}



const ContactContainer = () => {
    return(
        <div className='contact-container'>
            <span className="div-title">Contact Us</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contact us and we'll get back to you ASAP.</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        jacks-creek.com
                    </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>
                        ‪(502) 233-1393‬
                    </span>
                    <span>
                        <i className="far fa-envelope"></i>
                        adminvps@jacks-creek.com
                    </span>
                </div>
                    
                <div id='sect2'>
                    <span>
                           Contact adminvps@jacks-creek.com
                    </span>

                    <input type="text" placeholder=" Your Email Address" id="from" className="input-field"/>
                    <textarea name="" id="comment" cols="30" rows="10" placeholder=" Comment"></textarea>
                    <button className="contact-btn" onClick={() => {
                        var link = 'mailto:adminvps@jacks-creek.com?subject=Message from ' +document.getElementById('from').value +
                                   '&body='+document.getElementById('comment').value;
                        window.location.href = link;
                    } }>Send</button>                  
                </div>
            </div>
        </div> 
        
    );     
}


const FooterContainer = () => {
    return(
  	     <div className='contact-container2'>
		         <div className="column-footer" id="column-footer">      
			           <div>
				              <small>&copy; Jack's Creek Productions All Rights Reserved. <p>Design by: <a href="https://jacks-creek.com/">Jack's Creek Productions</a> | Banner image by: <a href="https://jacks-creek.com">jacks-creek.com</a></p></small>    
	                 <small> <p>*Disclaimer: All opinions and commentary are solely that of www.jacks-creek.com</p></small>			                    
                  <small> <p>Contact: <a href="mailto:adminvps@jacks-creek.com"> adminvps@jacks-creek.com</a></p></small>
                  <p><a href="https://twitter.com/JacksCreekcom"><input type="image" src={require('./images/twitterFooter.webp')} id="twitter" title="Twitter" alt="Twitter" /></a>
                  <a href="https://github.com"><input type="image" src={require('./images/github32.png')} id="github" title="Github" alt="Github" /></a></p>                  
              </div>   
		        </div>
        </div>	
    );    

}







