import React from "react";
import { Button } from "react-bootstrap";
import './Banner.css';

function Banner(){
    return(
        <>
        
            {/* <video src="2.mp4" autoPlay controls loop width="100%"></video> */}
       <div className="banner position-ralative">
       <video width="100%" autoPlay loop muted className='position-relative'>
            <source src="3.mp4" type="video/mp4" width="100%"/>
        </video>
        <div className="text-center text-white position-absolute start-0 top-25 w-100" style={{top:"25%"}} >
            <img src="logo192.png" alt="logo" width={120} className='logorotate'/>
            <h1>CNC WEB WORLD</h1>
           <h2>Remove Your Fresher Tag</h2>
           <Button variant="primary" className="me-4">Learn React</Button>
           <Button variant="secondary">Learn java</Button>
        </div>
       </div>
        </>
    );
}

export default Banner;