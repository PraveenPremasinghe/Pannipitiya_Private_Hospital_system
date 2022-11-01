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
import StaffTable from "../Components/PatientTable/StaffTable";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InputFeild from "../Components/InputFeild/inputfeild";

import { getAllStaff, createStaff } from "../services/Staff";

function Staff() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [staffList, setList] = useState([]);



const [name, setName] = useState("");
const [Nic, setNic] = useState("");
const [email, setEmail] = useState("");
const [doctorid , setDoctorid] = useState("");
const [status, setStatus] = useState("");
const [contact, setContact] = useState("");


  console.log();

  const handleSave = () => {
    let staff = {

      name: name,
      nic: Nic,
      email: email,
      doctor_id: doctorid,
      contact: contact,
      status: status,
    };

    createStaff(staff)
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
    getStaffs();
  }, []);

  const getStaffs = async () => {
    try {
      const response = await getAllStaff();
      setList(response.data);
      console.log("hfghg", response.data);
    } catch (e) {
      console.log(e);
    }
  };

  let staffLists = async () => {
    return <StaffTable staff={staffList} />;
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
                <Link to="/staff">
                  {" "}
                  <Dashboardbtn
                    icon={<FiUsers />}
                    dashbtnname={"Staff"}
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
                <div className="dashtitle">Staff Details</div>{" "}
              </div>
              <div className="col">
                <div className="addstaff">
                  <Addbutton
                    addbuttonicon={<FiPlusCircle />}
                    addbuttonname={"Add Staff"}
                    variant="outlined"
                    onClick={handleClickOpen}
                  ></Addbutton>
                </div>
              </div>
            </div>

            <hr className="dashhr" />

            {/* Staff Table */}
            <StaffTable list={staffList} />
            {/* Staff Table */}
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
        <DialogTitle id="responsive-dialog-title">{"Add Staff"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* add input feilds */}
            <InputFeild
              fristname="Staff Member Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Staff Member NIC"
              value={Nic}
              onChange={(e) => setNic(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Staff Member Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputFeild>
               <InputFeild
              fristname="Doctor ID"
              value={doctorid}
              onChange={(e) => setStatus(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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

export default Staff;
