import React from "react";
import "../../Assets/Styles/card.css";





function Card(props) {
  return (
<div>



<div className="Popularcard">

    <div className="cardbody">
    

    <div className="cardimage"><img src={props.image}/></div>
    <div className="services">{props.services}</div>
    </div>

</div>

</div>
  );
}

export default Card;
