import React from "react";
import "../../Assets/Styles/addbutton.css";



function Addbutton(props) {
  return (
<div>
 
<button onClick={props.onClick} className="addbutton">{props.addbuttonicon} &nbsp; {props.addbuttonname}</button>
 

  
</div>
  );
}

export default Addbutton;
