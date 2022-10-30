import React from "react";
import "../../Assets/Styles/editbutton.css";



function Editbutton(props) {
  return (
<div>
 
<button className="editbutton" onClick={props.onClick}>{props.editbuttonname}</button>
</div>
  );
}

export default Editbutton;
