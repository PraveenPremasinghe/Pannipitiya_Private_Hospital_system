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

import { getAllAppointments, createAppointment } from "../services/Appointments";

function Appointment() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [appointmentsList, setList] = useState([]);

const[date,setDate]=useState("");
const[type,setType]=useState("");
const[disease,setDisease]=useState("");
const[patientid,setPatientid]=useState();
const[doctorId,setDoctorId]=useState();

// const[contact,setContact]=useState("");






  console.log();

  const handleSave = () => {
    let appointment = {
      date:date,
      type:type,
      disease:disease,
      patient_id: parseInt(patientid),
      doctor_id: parseInt(doctorId),




      // contact:contact
    };

    createAppointment(appointment)
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
    getappointments();
  }, []);

  const getappointments = async () => {
    try {
      const response = await getAllAppointments();
      setList(response.data);
      console.log("hfghg", response.data);
    } catch (e) {
      console.log(e);
    }
  };

  let appointmentsLists = async () => {
    return <AppointmentTable appointment={appointmentsList} />;
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
                <div className="Profile_name">Chara Neesadi</div>
                <div className="Message">Appointment Manager</div>
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
                <div className="dashtitle">Appointments Details</div>{" "}
              </div>
              <div className="col">
                <div className="addappointment">
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
            <AppointmentTable list={appointmentsList} />
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
              fristname="Appointment date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Appointment Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            ></InputFeild>
              <InputFeild
              fristname="disease"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
            ></InputFeild>
             <InputFeild
              fristname="Patient ID"
              value={patientid}
              onChange={(e) => setPatientid(e.target.value)}
            ></InputFeild>
              <InputFeild
              fristname="Doctor ID"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
            ></InputFeild>
          
        
           {/* <InputFeild
              fristname="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></InputFeild>  */}
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

export default Appointment;
