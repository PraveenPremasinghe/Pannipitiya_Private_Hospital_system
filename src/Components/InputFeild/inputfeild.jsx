import React from "react";
import "../../Assets/Styles/inputfeild.css";



function InputFeild(props) {
  return (
<div>
 
<form action="/#">
    <div className="inputfeildcover">

    <div className="input-title">{props.fristname}</div>
  <input type="text" onChange={props.onChange} value={props.value}  className="input-feild" id="fname" name="fname"/>
    </div>

  
 
</form>
 

  
</div>
  );
}

export default InputFeild;
