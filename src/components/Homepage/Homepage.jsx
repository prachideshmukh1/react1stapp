import React from "react";
import Banner from "./Banner/Banner";
import Component from "./Component/Component";
import Benifit from "./Benifits/Benifit";
import Service from "./Service/Service";

function Homepage(){
    return(
        <>
            <Banner />
            <Component />
             <Benifit />
             <Service />
        </>
    );
}

export default Homepage;