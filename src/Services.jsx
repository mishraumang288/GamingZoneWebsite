import React from "react";
import Cards from "./Cards";
import ImagesData from "./ImagesData";

function Services() {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-center">Welcome to Our Gaming World<br/><br/></h2>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                  {
                      ImagesData.map( (val, index) => {
                        return <Cards
                        key = {index}
                        imgSrc = {val.imgSrc}
                        title={val.title} 
                        />
                      })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;