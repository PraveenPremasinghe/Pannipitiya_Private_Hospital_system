import React from "react";
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import "../Assets/Styles/patient.css";
import Dashboardbtn from "../Components/Dashboardbtn/Dashboardbtns";
import dashlogo from "../Assets/Images/dashlogo.png";
import profileimg from "../Assets/Images/profile04.png";

import {
  FiCommand,
  FiUsers,
  FiUser,
  FiVoicemail,
  FiPlusCircle,
} from "react-icons/fi";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Addbutton from "../Components/addbutton/addbutton";
import PatientTable from "../Components/PatientTable/PatientTable";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InputFeild from "../Components/InputFeild/inputfeild";

function Patient() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="dash-padding">
        <div className="row dashbordside">
          <div className="col-3 ">
            <div className="logo">
              <img alt="logo" src={dashlogo} />
            </div>
          </div>
          <div className="col-7">
            {" "}
            <div className="searchbar">  <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
      </InputGroup></div>
          </div>
          <div className="col-2 justify-content-center">
            <div className="Notification">
              <div className="Notification_icon">
                <img
                  className="circular--profile"
                  alt="profile image"
                  src={profileimg}
                />
              </div>
              <div className="Card_message">
                <div className="Profile_name">David Willy</div>
                <div className="Message">Project Manager</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row nevside">
          <div className="col-2 dashbordside">
            <div>
              <div className="dashbardbtn">
              <Link to="/">
                {" "}
                <Dashboardbtn
                  icon={<FiCommand />}
                  dashbtnname={"Dashboard"}
                ></Dashboardbtn>{" "}
         </Link>

              </div>
              <div className="dashbardbtn">
              <Link to="/patient">

                {" "}
                <Dashboardbtn
                  icon={<FiUsers />}
                  dashbtnname={"Patient"}
                ></Dashboardbtn>{" "}
                </Link>
              </div>
              <div className="dashbardbtn">
              <Link to="/doctor">

                {" "}
                <Dashboardbtn
                  icon={<FiUser />}
                  dashbtnname={"Doctor"}
                ></Dashboardbtn>{" "}
                </Link>
              </div>
              <div className="dashbardbtn">

              <Link to="/Staff">
                {" "}
                <Dashboardbtn
                  icon={<FiUsers />}
                  dashbtnname={"Staff"}
                ></Dashboardbtn>{" "}
                </Link>
              </div>
              <div className="dashbardbtn">

              <Link to="/Appointments">
                {" "}
                <Dashboardbtn
                  icon={<FiVoicemail />}
                  dashbtnname={"Appointments"}
                ></Dashboardbtn>{" "}
                </Link>
              </div>
            </div>
          </div>

          {/* right side components */}

          <div className="col-10 right-sied">
            <div className="row">
              <div className="col">
                {" "}
                <div className="dashtitle">Patient Details</div>{" "}
              </div>
              <div className="col">
                <div className="addpatient">
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Add now
                  </Button>
                  <Addbutton
                    addbuttonicon={<FiPlusCircle />}
                    addbuttonname={"Add Patient"}
                    variant="outlined"
                    onClick={handleClickOpen}
                  ></Addbutton>
                </div>
              </div>
            </div>

            <Button variant="outlined" >
              Delete
            </Button>

            <hr className="dashhr" />

            {/* Patient Table */}
            <PatientTable></PatientTable>
            {/* Patient Table */}
          </div>

          {/* right side components */}
        </div>
      </div>

      {/* ModalBox */}

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add Patient"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* add input feilds */}
            <InputFeild fristname="Patient Name"></InputFeild>
            <InputFeild fristname="Patient NIC"></InputFeild>
            <InputFeild fristname="Patient Email"></InputFeild>
            <InputFeild fristname="Patient Email"></InputFeild>
            <InputFeild fristname="Date Checkin"></InputFeild>
            <InputFeild fristname="Doctor Assigned"></InputFeild>
            <InputFeild fristname="Disease"></InputFeild>
            <InputFeild fristname="Status"></InputFeild>
            <InputFeild fristname="RoomNumber"></InputFeild>
            <InputFeild fristname="Contact"></InputFeild>
            {/* add input feilds */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* ModalBox */}
    </div>
  );
}

export default Patient;
