import React from "react";
import "../Assets/Styles/patient.css";
import Dashboardbtn from "../Components/Dashboardbtn/Dashboardbtns";


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

function Doctor() {
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
        <div className="row">
          <div className="col-2">
            <div className="logo">Logo</div>
          </div>
          <div className="col-8">
            {" "}
            <div className="searchbar">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
              </InputGroup>
            </div>
          </div>
          <div className="col-2">
            <div className="profile">dfd</div>
          </div>
        </div>

        <div className="row nevside">
          <div className="col-2">
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
                <div className="dashtitle">doctor Details</div>{" "}
              </div>
              <div className="col">
                <div className="addpatient">
                <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
                  <Addbutton
                    addbuttonicon={<FiPlusCircle />}
                    addbuttonname={"Add Patient"}
                    variant="outlined" onClick={handleClickOpen}
                  ></Addbutton>
                </div>
              </div>
            </div>

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
        <DialogTitle id="responsive-dialog-title">
          {"Add Patient"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
      {/* add input feilds */}
      <InputFeild fristname = "Doctor ID"></InputFeild>
      <InputFeild fristname = "Doctor Name"></InputFeild>
      <InputFeild fristname = "Patient NIC"></InputFeild>
      <InputFeild fristname = "Date join"></InputFeild>
      <InputFeild fristname = "Doctor Email"></InputFeild>
      <InputFeild fristname = "Specialist"></InputFeild>
      <InputFeild fristname = "Disease"></InputFeild>
      <InputFeild fristname = "Schedule"></InputFeild>
      <InputFeild fristname = "Status"></InputFeild>
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

export default Doctor;
