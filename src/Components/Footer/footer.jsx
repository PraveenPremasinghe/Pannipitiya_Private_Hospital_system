import React from "react";
import "./footer.css";








function Footer() {
    return (
      <div>

<div className="row footer-bg">
    <div className="col-sm-3">
    <div className="footer-title">OUR MAIN SERVICES</div>

    <ul className="footerul">
            <li className="footer-item"><a href="#" className="footer-menu">Radiology Department</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Services</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Rooms</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">About Us</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Contact Us</a></li>
         </ul>

    </div>

    <div className="col-sm-3">
    <div className="footer-title">EXPLORE</div>

    <ul className="footerul">
            <li className="footer-item"><a href="#" className="footer-menu">About us</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Awards</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Board of Directors</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Team</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Careers</a></li>
         </ul>

    </div>

    <div className="col-sm-3">
    <div className="footer-title">NEWS</div>

    <ul className="footerul">
            <li className="footer-item"><a href="#" className="footer-menu">CSR</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">News</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Sitemap</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">Contact us</a></li>
            <li className="footer-item"><a href="#" className="footer-menu">News</a></li>
         </ul>

    </div>

    <div className="col-sm-3">
    <div className="footer-title">Subscribe to our newsletter</div>


    <input type="text" className="subscribe-input" placeholder="Enter Your Email Address"/>
    <button type="submit" className="subscrib-btn">Subscribe Now</button>

  
<div className="socialmedia">


<div className="socialmedia-title">Join our community</div>

<div class="flex-container-socialmedia">
   <div class="flex-items socialmedia-p"><i class="bx bxl-facebook"></i></div>
   <div class="flex-items socialmedia-p"><i class="bx bxl-instagram"></i></div>
   <div class="flex-items socialmedia-p"><i class="bx bxl-twitter"></i></div>
   <div class="flex-items socialmedia-p"><i class="bx bxl-youtube"></i></div>
</div>



         </div>
  
    </div>


</div>



<div className="footerbase">
    <div className="footerbase-copyright"> Copyright @ 2022- Pannipitiya Private Hospital , All Rights Reserved. Web Design & Development by Blackytech</div>
  
</div>

</div>

    
    
    );
  }
  
  export default Footer;
  