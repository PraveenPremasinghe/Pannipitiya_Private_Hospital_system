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

import { IoMdAddCircle } from "react-icons/io";

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

import { getAllPatients, createPatient } from "../services/Patient";

function Patient() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [patientList, setList] = useState([]);

  const [name, setName] = useState("");
  const [Nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [contact, setContact] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [status, setStatus] = useState("");
  const [doctor, setDoctor] = useState(1);
  const [createDate, setCreateDate] = useState("2018-10-14");
  const [updateDate, setUpdateDate] = useState("2018-10-14");

  console.log();

  const handleSave = () => {
    let patient = {
      name: name,
      nic: Nic,
      email: email,
      check_in: checkIn,
      check_out: checkOut,
      contact: contact,
      room_no: roomNo,
      status: status,
      doctor_id: doctor,
      created_at: createDate,
      updated_at: updateDate,
    };

    createPatient(patient)
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
    getPatients();
  }, []);

  const getPatients = async () => {
    try {
      const response = await getAllPatients();
      setList(response.data);
      console.log("hfghg", response.data);
    } catch (e) {
      console.log(e);
    }
  };

  let patientLists = async () => {
    return <PatientTable patient={patientList} />;
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
                <div className="dashtitle">Patient Details</div>{" "}
              </div>
              <div className="col">
                <div className="addpatient">
                  <Addbutton
                    addbuttonicon={<IoMdAddCircle size={20} />}
                    addbuttonname={"Add Patient"}
                    variant="outlined"
                    onClick={handleClickOpen}
                  ></Addbutton>
                </div>
              </div>
            </div>

            <hr className="dashhr" />

            {/* Patient Table */}
            <PatientTable list={patientList} />
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
            <InputFeild
              fristname="Patient Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Patient NIC"
              value={Nic}
              onChange={(e) => setNic(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Patient Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputFeild>
            {/* <InputFeild fristname="Patient Email"></InputFeild> */}
            <InputFeild
              fristname="Date Checkin"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Date Checkout"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="RoomNumber"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
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

export default Patient;
