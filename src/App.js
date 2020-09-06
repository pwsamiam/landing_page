import React from "react";
import "./styles.css";

export default function App() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section bg-grey'
                img='./logo48Gray.webp'
                title="It's All About Us" 
                description="Lasciate ogne speranza, voi ch'intrate"
            />

            <Card 
                className='section bg-grey'
                img='./logo48Gray.webp' 
                title='Our Lack of Values'
                description='We have no values, but we are high-functioning nihilists.'
            />

            <Card 
                className='section bg-grey'
                img='./logo48Gray.webp'
                title='Our Failed Mission' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            />
            <ContactContainer/>
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
                "We specialize in something ... we are just not sure what ..."
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
        <div className='contact-container bg-grey'>
            <span className="div-title">Contact us</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contact us and we might get back to you within 24 hours or not at all. Depends on what you want.</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        The Dude Abides
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
                        Contact
                    </span>

                    <input type="text" placeholder="email address" id="from" className="input-field"/>
                    <textarea name="" id="email" cols="30" rows="10" placeholder="comment"></textarea>
                    <button className="contact-btn" onClick={() => {
                        var link = 'mailto:adminvps@jacks-creek.com?subject=Message from ' +document.getElementById('from').value +
                                   '&body='+document.getElementById('email').value;
                        window.location.href = link;
                    } }>Send</button>                  
                </div>
            </div>
        </div> 
        
    );
        
}




