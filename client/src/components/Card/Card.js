import React from "react";

const Card = ({ children }) =>
<div class="card" style="width: 20rem;">
   <img class="card-img-top" href="../../images/rodeo.jpeg" alt="Contact Pic"></img>   
  <div class="card-body">
    {children}
    <h4 class="card-title">Add a Rodeo to our Page!</h4>
    <p class="card-text">Would you like to add an event you don't see listed? Click the button below to add it to our list!</p>
    <a href="/" class="btn btn-primary">Add Rodeo</a>
  </div>
</div>



export default Card;