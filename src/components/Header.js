import React from "react";
import './css/Header.css';

export default function(){
   
    return (
        <div className="Header">
            <div className='Header-Flex'>
                <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt='Notes Logo'/>
                <div className='Heading'>Notes</div>
            </div>
        </div>
    )
}