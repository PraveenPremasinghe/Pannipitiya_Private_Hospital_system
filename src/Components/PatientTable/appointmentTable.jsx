import React,{useState,useEffect} from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { deleteAppointments,updateAppointments} from '../../services/Appointments';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import InputFeild from "../../Components/InputFeild/inputfeild";




function createData(AppointmentID,DoctorID,Appointmentdate,Appointmenttype,Disease,Roomnumber,Contact) {
  return {
AppointmentID,
DoctorID,
Appointmentdate,
Appointmenttype,
Disease,
Roomnumber,
Contact,

history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (



    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.AppointmentID }
        </TableCell>
        <TableCell align="center">{row.DoctorID}</TableCell>
        <TableCell align="center">{row.Appointmentdate}</TableCell>
        <TableCell align="center" >{row.Appointmenttype}</TableCell>
        <TableCell align="center">{row.Disease}</TableCell>
        <TableCell align="center">{row.Roomnumber}</TableCell>
        <TableCell align="center">{row.Disease}</TableCell>
        <TableCell align="center">{row.RoomNumber}</TableCell>
        <TableCell align="center">{row.Contact}</TableCell>

        {/* <TableCell><EditIcon/></TableCell>
        <TableCell><DeleteIcon/></TableCell>
         */}



      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


Row.propTypes = {
  row: PropTypes.shape({
    AppointmentID : PropTypes.string.isRequired,
    DoctorID: PropTypes.string.isRequired,
    Appointmentdate: PropTypes.string.isRequired,
    Appointmenttype: PropTypes.string.isRequired,
    Disease: PropTypes.instanceOf(Date).isRequired,
    Roomnumber: PropTypes.string.isRequired,
    RoomNumber: PropTypes.number.isRequired,
    Contact: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function CollapsibleTable(props) {


  const [open, setOpen] = React.useState(false);
  const[appointmentId,setPatientId]=useState("");
  const[doctorId,setDoctorId]=useState("");
  const[Date,setDate]=useState("");
  const[type,setType]=useState("");
  const[disease,setDisease]=useState("");
  const[roomNo,setRoomNo]=useState("");
  

const handleClickOpen = (row) => {

  
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  const handleDelete = (appointment_id) => {
    console.log("del");
    console.log("del",appointment_id);
    deleteAppointments(appointment_id).then((response) => {
      console.log("res",response);
      alert("Data successfully Deleted");
      window.location.reload(true);
    });
  };




  const updateAppointments = (id) => {
    let appointment = {
      appointment_id: appointmentId,
      doctor_id: doctorId,
      date: Date,
      type: type,
      disease: disease,
      room_no: roomNo,
      // contact: contact,
    };

    updateAppointments(id,appointment)
    .then((response) => {
      alert("Data successfully inserted");
      window.location.reload(true);
    })
    .catch((error) => {
      alert(error.message);
    });
};



  return (

    <>
    

    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Patient Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
             {/* add input feilds */}
            <InputFeild
              fristname="Appointment date"
              value={Date}
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
              fristname="RoomNumber"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
            ></InputFeild>
            {/* <InputFeild
              fristname="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></InputFeild> */}
            {/* add input feilds */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>



    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Appointment ID </TableCell>
            <TableCell>DoctorID</TableCell>
            <TableCell>Appointment Date</TableCell>
            <TableCell>Appointment Type,</TableCell>
            <TableCell>Disease</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Room Number</TableCell>
            <TableCell>Contact</TableCell>




          </TableRow>
        </TableHead>
        <TableBody>
          {console.log("abf",props.list)}
          {props.list.map((row, index) => {
            return (
              <TableRow>
            <TableCell />
            <TableCell>{row.appointment_id} </TableCell>
            <TableCell>{row.doctor_id}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.disease}</TableCell>
            <TableCell>{row.room_no}</TableCell>
            <TableCell>{row.contact}</TableCell>




            <TableCell> <button editbuttonname="Edit" variant="outlined" onClick={() => handleClickOpen(row)} >Edit</button> </TableCell>
            <TableCell> <button deletebuttonname="Delete" onClick={() => handleDelete(row.id)} >Detele</button> </TableCell>
           
            

          </TableRow>
            )
          })}
        </TableBody>
      </Table>

    </TableContainer>
    </>



  );
}
