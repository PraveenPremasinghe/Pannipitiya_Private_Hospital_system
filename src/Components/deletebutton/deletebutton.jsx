import React from "react";
import "../../Assets/Styles/deletebutton.css";



function Deletebutton(props) {
  return (
<div>
 
<button className="deletebutton" onClick={props.onClick}>{props.deletebuttonname}</button>
 

  
</div>
  );
}

export default Deletebutton;
