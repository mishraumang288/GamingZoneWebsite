import React from "react";
import { NavLink } from "react-router-dom";

function Cards(props) {
  return (
    <div className="col-md-4 ">
      <div className="card">
      <div class="embed-responsive embed-responsive-16by9">
        <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc} />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text">
            Click Below to Play
          </p>
          <NavLink to="/" className="btn btn-primary">
            Play
          </NavLink>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;