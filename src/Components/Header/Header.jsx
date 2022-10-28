import React, { useEffect, useState } from "react";
import { FiMapPin,FiMail,FiPhoneCall} from 'react-icons/fi';

import "./Header.css";
import backgroundImg from '../../Assets/Images/mainimage.png';
import Appointment from "../Appointment/Appointment";


function Header() {

    
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setMenu(true);
  }

  function closeMenu() {
    setMenu(false);
  }
  return (
<div>



<header className={`header ${isScrolled && "on-scroll "}`} id="header">





<div className="header-top">
<div className="main-padding">
<ul style={{margin:"0px" }}>
 <li className="header-details"><FiMapPin/>&nbsp;&nbsp;334/4 Pannipitiya - Malabe Rd &nbsp;&nbsp;&nbsp;&nbsp;</li>
 <li className="header-details"> <FiMail/>&nbsp;&nbsp;info@pannipitiyaprivatehospital.lk&nbsp;&nbsp;&nbsp;&nbsp;</li>
 <li className="header-details"><FiPhoneCall/> &nbsp;&nbsp;0117 697 900</li>
</ul>
</div>
</div>

<div className="main-padding">

  <nav className="navbar">
    <a href="#" className="brand">
      Konekt
    </a> 
    <div className={`burger ${menu && "is-active" }`}  id="burger" onClick={menu ? closeMenu:toggleMenu}>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </div>
    <div className={`menu ${menu && "is-active" }`}  id="menu">
      <ul className="menu-inner">
        <li className="menu-item">
          <a href="#" className="menu-link" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link" onClick={closeMenu}>
          Radiology
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link" onClick={closeMenu}>
          Department
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link" onClick={closeMenu}>
          Services
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link" onClick={closeMenu}>
          Rooms
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link" onClick={closeMenu}>
          About Us
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link" onClick={closeMenu}>
          Contact Us
          </a>
        </li>
      </ul>
    </div>
    <a href="#" className="Signup">
      Sign Up
    </a>
    <a href="#" className="Signin">
      Sign In
    </a>
  </nav>
  </div>

 
</header>


<div className="mainimg">
   
<img src={backgroundImg} width={"100%"} />






        <div className="pb-5 maintitle">
         
          <div className="detail-title2">Not just better <br></br>
healthcare, but a better 
healthcare experience</div>

          <p className="detail-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley 
          of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
          </p>

          <Appointment></Appointment>

        </div>
</div>





</div>
  );
}

export default Header;
