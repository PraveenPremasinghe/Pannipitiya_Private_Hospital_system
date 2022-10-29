import React from "react";
import "../../Assets/Styles/dashboardbtns.css";



function Dashboardbtns(props) {
  return (
<div> 
    <div className="dashbord-cover">
<button className="dashboardbtns">{props.icon}&nbsp;&nbsp;{props.dashbtnname}</button>
        </div> 
</div>
  );
}

export default Dashboardbtns;
