import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faMobileAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactContainer = () => {
    return(
        <div className='contact-container'>
            <span className="div-title">Contact Us</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contact us and we'll get back to you ASAP.</span>
                    <span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> jacks-creek.com
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faMobileAlt} /> (502) 233-1393‬
                    </span>
                    <span> 
                        <FontAwesomeIcon icon={faEnvelope} /> adminvps@jacks-creek.com
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
};

export default ContactContainer;

