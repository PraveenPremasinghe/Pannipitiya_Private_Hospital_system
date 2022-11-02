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
import { deletePatient,updatePatient} from '../../services/Patient';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import InputFeild from "../../Components/InputFeild/inputfeild";




function createData(PatientID,PatientNIC,PatientName,PatientEmail,Datecheckin,DoctorAssigned,Disease,Status,RoomNumber,Contact) {
  return {
PatientID,
PatientNIC,
PatientName,
PatientEmail,
Datecheckin,
DoctorAssigned,
Disease,
Status,
RoomNumber,
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
          {row.PatientID }
        </TableCell>
        <TableCell align="center">{row.PatientNIC}</TableCell>
        <TableCell align="center">{row.PatientName}</TableCell>
        <TableCell align="center" >{row.PatientEmail}</TableCell>
        <TableCell align="center">{row.Datecheckin}</TableCell>
        <TableCell align="center">{row.DoctorAssigned}</TableCell>
        <TableCell align="center">{row.Disease}</TableCell>
        <TableCell align="center">{row.Status}</TableCell>
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
    PatientID : PropTypes.string.isRequired,
    PatientNIC: PropTypes.string.isRequired,
    PatientName: PropTypes.string.isRequired,
    PatientEmail: PropTypes.string.isRequired,
    Datecheckin: PropTypes.instanceOf(Date).isRequired,
    DoctorAssigned: PropTypes.string.isRequired,
    Disease: PropTypes.string.isRequired,
    Status: PropTypes.string.isRequired,
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
  const [patientid,setpatientid] = useState("");
  const [name,setName] = useState("praveen");
  const [Nic,setNic] = useState("");
  const [email,setEmail] = useState("");
  const [checkIn,setCheckIn] = useState("");
  const [checkOut,setCheckOut] = useState("");
  const [contact,setContact] = useState("");
  const [roomNo,setRoomNo] = useState("");
  const [status,setStatus] = useState("");
  const [doctor,setDoctor] = useState(1);
  const [createDate,setCreateDate] = useState("2018-10-14"); 
  const [updateDate,setUpdateDate] = useState("2018-10-14"); 
  

const handleClickOpen = (row) => {



  setpatientid(row.id);
  setName(row.name);
  setNic(row.nic);
  setEmail(row.email);
  setCheckIn(row.check_in);
  setCheckOut(row.check_out);
  setStatus(row.status);
  setRoomNo(row.room_no);
  setContact(row.contact);


  setOpen(true);

  console.log(row);
};

const handleClose = () => {
  setOpen(false);
};

  const handleDelete = (patient_id) => {
    console.log("del");
    console.log("del",patient_id);
    deletePatient(patient_id).then((response) => {
      console.log("res",response);
      alert("Data successfully Deleted");
      window.location.reload(true);
    });
  };




  const editPatient = () => {
    let patient = {
      name: name,
      nic:Nic,
      email: email,
      check_in: checkIn,
      check_out: checkOut,
      contact:contact,
      room_no: roomNo,
      status: status,
      doctor_id:doctor,
      created_at: createDate,
      updated_at: updateDate
    };

    updatePatient(patientid,patient)
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
            <InputFeild fristname="Patient Name"  value={name} onChange={(e) => setName(e.target.value)}></InputFeild>
            <InputFeild fristname="Patient NIC" value={Nic} onChange={(e) => setNic(e.target.value)}></InputFeild>
            <InputFeild fristname="Patient Email" value={email} onChange={(e) => setEmail(e.target.value)}></InputFeild>
            {/* <InputFeild fristname="Patient Email"></InputFeild> */}
            <InputFeild fristname="Date Checkin" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}></InputFeild>
            <InputFeild fristname="Date Checkout" value={checkOut} onChange={(e) => setCheckOut(e.target.value)}></InputFeild>
            <InputFeild fristname="Status" value={status} onChange={(e) => setStatus(e.target.value)}></InputFeild>
            <InputFeild fristname="RoomNumber" value={roomNo} onChange={(e) => setRoomNo(e.target.value)}></InputFeild>
            <InputFeild fristname="Contact" value={contact} onChange={(e) => setContact(e.target.value)}></InputFeild>
            {/* add input feilds */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editPatient} autoFocus>
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
            <TableCell>Patient ID </TableCell>
            <TableCell>Patient NIC</TableCell>
            <TableCell>Patient Name</TableCell>
            <TableCell>Patient Email</TableCell>
            <TableCell>Datecheck in</TableCell>
            <TableCell>Datecheck out</TableCell>
          
            <TableCell>Status</TableCell>
            <TableCell>Room Number</TableCell>
            <TableCell>Contact</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {console.log("staff table",props.list)}
          {props.list.map((row, index) => {
            return (
              <TableRow>
            <TableCell />
            <TableCell>{row.id} </TableCell>
            <TableCell>{row.nic}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.check_in}</TableCell>
            <TableCell>{row.check_out}</TableCell>
            <TableCell>{row.status}</TableCell>
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
