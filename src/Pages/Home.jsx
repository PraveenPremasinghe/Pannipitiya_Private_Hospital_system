import React from "react";
import Header from "../Components/Header/Header";
import "../Assets/Styles/Home.css";
import Card from "../Components/Card/card";
import Introduction from "../Components/OurIntroduction/Introduction";
import Footer from "../Components/Footer/footer";

import AmbulanceServices from "../Assets/Images/AmbulanceServices.png";
import DentalCareUnit from "../Assets/Images/DentalCareUnit.png";
import DialysisUnit from "../Assets/Images/DialysisUnit.png";
import Laboratories from "../Assets/Images/Laboratories.png";
import OPDService from "../Assets/Images/OPDService.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  return (
    <div>
      <Header></Header>

      {/* Popular Searches on Wecare Section */}

      <div className="main-padding">
        <div className="populercard-body">
          <div className="populercard">Popular Searches on Wecare</div>

          <Carousel responsive={responsive}>
            <Card image={OPDService} services={"OPD Service"}></Card>
            <Card image={AmbulanceServices} services={"Ambulance"}></Card>
            <Card image={DentalCareUnit} services={"Dental Care Unit"}></Card>
            <Card image={Laboratories} services={"Laboratories"}></Card>
            <Card image={DialysisUnit} services={"Dialysis Unit"}></Card>
            <Card image={OPDService} services={"OPD Service"}></Card>
          </Carousel>
        </div>
      </div>

      {/* Our Introduction Section */}

      <div className="introduction-section">
        <div className="main-padding">
          <Introduction></Introduction>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
