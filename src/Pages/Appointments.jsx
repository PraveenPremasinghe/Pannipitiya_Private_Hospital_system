import React from "react";
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
import AppointmentTable from "../Components/PatientTable/appointmentTable";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InputFeild from "../Components/InputFeild/inputfeild";

function Appointments() {
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
          <div className="searchbar">fdgdfh</div>
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
              {" "}
              <Dashboardbtn
                icon={<FiCommand />}
                dashbtnname={"Dashboard"}
              ></Dashboardbtn>{" "}
            </div>
            <div className="dashbardbtn">
              {" "}
              <Dashboardbtn
                icon={<FiUsers />}
                dashbtnname={"Patient"}
              ></Dashboardbtn>{" "}
            </div>
            <div className="dashbardbtn">
              {" "}
              <Dashboardbtn
                icon={<FiUser />}
                dashbtnname={"Doctor"}
              ></Dashboardbtn>{" "}
            </div>
            <div className="dashbardbtn">
              {" "}
              <Dashboardbtn
                icon={<FiUsers />}
                dashbtnname={"Staff"}
              ></Dashboardbtn>{" "}
            </div>
            <div className="dashbardbtn">
              {" "}
              <Dashboardbtn
                icon={<FiVoicemail />}
                dashbtnname={"Appointment"}
              ></Dashboardbtn>{" "}
            </div>
          </div>
        </div>

        {/* right side components */}

        <div className="col-10 right-sied">
          <div className="row">
            <div className="col">
              {" "}
              <div className="dashtitle">Appointments Details</div>{" "}
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

            {/* Appointments Table */}
            <AppointmentTable></AppointmentTable>
            {/* Appointments Table */}
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
        <DialogTitle id="responsive-dialog-title">
          {"Add Appointments"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
      {/* add input feilds */}
      <InputFeild fristname = "Appointments Name"></InputFeild>
      <InputFeild fristname = "Appointments NIC"></InputFeild>
      <InputFeild fristname = "Appointments Email"></InputFeild>
      <InputFeild fristname = "Appointments Email"></InputFeild>
      <InputFeild fristname = "Date Checkin"></InputFeild>
      <InputFeild fristname = "Doctor Assigned"></InputFeild>
      <InputFeild fristname = "Disease"></InputFeild>
      <InputFeild fristname = "Status"></InputFeild>
      <InputFeild fristname = "RoomNumber"></InputFeild>
      <InputFeild fristname = "Contact"></InputFeild>
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

export default Appointments;
