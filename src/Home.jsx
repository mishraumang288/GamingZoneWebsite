import React from "react";
import Common from "./Common";
import web from "../src/images/goku2.png";


function Home() {
  return (
    <div>
      <Common 
      Title ="Enter into the Gaming World with "
      brandname ="Umang Mishra"
      visit ="/services"
      imgSrc ={web}
      btnname="Get started"/>
    </div>
  );
}

export default Home;