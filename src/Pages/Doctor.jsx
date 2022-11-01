import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import DoctorTable from "../Components/PatientTable/doctorsTable";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InputFeild from "../Components/InputFeild/inputfeild";

import { getAllDoctors, createDoctor } from "../services/Doctor";

function Doctor() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [doctorList, setList] = useState([]);


  const [name, setName] = useState("");
  const [Nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const[specialist, setSpecialist] = useState("");
  const [contact, setContact] = useState("");
  const [date_joined, setDate_joined] = useState("");
  const[status, setStatus] = useState("");


  console.log();

  const handleSave = () => {
    let doctor = {
      name: name,
      nic: Nic,
      email: email,
      specialist: specialist,
      contact: contact,
      date_joined: date_joined,
      status: status,
   
    };

    createDoctor(doctor)
      .then((response) => {
        alert("Data successfully inserted");
        window.location.reload(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getdoctors();
  }, []);

  const getdoctors = async () => {
    try {
      const response = await getAllDoctors();
      setList(response.data);
      console.log("hfghg", response.data);
    } catch (e) {
      console.log(e);
    }
  };

  let doctorLists = async () => {
    return <DoctorTable doctor={doctorList} />;
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
            <div className="searchbar">
              {" "}
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
          <div className="col-3 dashbordside">
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

          <div className="col-9 right-sied">
            <div className="row">
              <div className="col">
                {" "}
                <div className="dashtitle">Doctor Details</div>{" "}
              </div>
              <div className="col">
                <div className="addDoctor">
                  <Addbutton
                    addbuttonicon={<FiPlusCircle />}
                    addbuttonname={"Add Doctor"}
                    variant="outlined"
                    onClick={handleClickOpen}
                  ></Addbutton>
                </div>
              </div>
            </div>

            <hr className="dashhr" />

            {/* Doctor Table */}
            <DoctorTable list={doctorList} />
            {/* Doctor Table */}
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
        <DialogTitle id="responsive-dialog-title">{"Add Doctor"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* add input feilds */}
            <InputFeild
              fristname="Doctor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Doctor NIC"
              value={Nic}
              onChange={(e) => setNic(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Doctor Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputFeild>
            {/* <InputFeild fristname="Doctor Email"></InputFeild> */}
            <InputFeild
              fristname="Doctor Specialist"
              value={specialist}
              onChange={(e) => setSpecialist(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Doctor Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Doctor Join Date"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Doctor Satatus"
              value={date_joined}
              onChange={(e) => setDate_joined(e.target.value)}
            ></InputFeild>
            {/* add input feilds */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* ModalBox */}
    </div>
  );
}

export default Doctor;
