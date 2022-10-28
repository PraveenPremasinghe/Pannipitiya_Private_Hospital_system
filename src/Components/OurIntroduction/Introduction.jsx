import React from "react";
import "../../Assets/Styles/Introduction.css";
import IntroductionImage from '../../Assets/Images/introctionimage.png';
import IntroductionImage2 from '../../Assets/Images/introctionimage2.png';
import Callnowbtn from "../Callnowbtn/Callnowbtn";
import LearnMore from "../learnmore/Learnmore"








function Introduction() {
  return (
<div>
 

  <div className="row Introduction">
    <div className="col-sm-6">
      <div className="intoduction-header">Our Introduction</div>
      <div className="intoduction-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
      a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting, remaining essentiala type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting, remaining ess</div>

      <div className="call-readmore"><Callnowbtn></Callnowbtn></div> 

     
      

    </div>
    <div className="col-sm-6 IntroductionImage"><img src={IntroductionImage} alt="IntroductionImage"/></div>
  </div>

  <hr className="hrline"/>

  <div className="row Introduction">


  <div className="col-sm-6 IntroductionImage"><img src={IntroductionImage2} alt="IntroductionImage"/></div>



    <div className="col-sm-6">

      <div className="intoduction-2-header-center">
      <div className="intoduction-2-header">We have modern Medical diagnosiis system</div>
      </div>
      <div className="intoduction-2-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
      a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting, remaining essentiala type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting, remaining ess</div>
      
      <div className="LearnMore-center"><LearnMore></LearnMore></div> 
</div>


  </div>

</div>
  );
}

export default Introduction;
