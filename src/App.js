import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Header from "./components/Header.js";
import ContactContainer from "./components/Contact.js";
import Card from "./components/Card.js";
import FooterContainer from "./components/Footer.js";

import "./styles.css";

//library.add(fab,fas)
library.add(fas,far)

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



















