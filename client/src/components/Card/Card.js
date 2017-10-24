import React from "react";

const Card = ({ children }) =>
<div className="card" style={{width: "20rem"}}>
   <img className="card-img-top" href="../../images/rodeo.jpeg" alt="Contact Pic"></img>
  <div className="card-body">
    {children}
    <h4 className="card-title">Add a Rodeo to our Page!</h4>
    <p className="card-text">Would you like to add an event you don't see listed? Click the button below to add it to our list!</p>
    <a href="/" className="btn btn-primary">Add Rodeo</a>
  </div>
</div>



export default Card;
