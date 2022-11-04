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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateDoctor,deleteDoctor} from '../../services/Doctor';
import InputFeild from "../../Components/InputFeild/inputfeild";


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { IoIosCloseCircle,IoMdOpen} from "react-icons/io";





function createData(DoctorID,DoctorName,DoctorNIC,DoctorEmail,DoctorSpecialist,Doctorcontact,Doctorjoindate,Status  ) {
  return {
DoctorID,
DoctorName,
DoctorNIC,
DoctorEmail,
DoctorSpecialist,
Doctorcontact,
Doctorjoindate,
Status,
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
          {row.DoctorID }
        </TableCell>
        <TableCell align="center">{row.DoctorName}</TableCell>
        <TableCell align="center">{row.DoctorNIC}</TableCell>
        <TableCell align="center" >{row.DoctorEmail}</TableCell>
        <TableCell align="center">{row.DoctorSpecialist}</TableCell>
        <TableCell align="center">{row.Doctorjoindate}</TableCell>
        <TableCell align="center">{row.Contact}</TableCell>
        <TableCell align="center">{row.Status}</TableCell>
        {/* <TableCell><EditIcon/></TableCell>
        <TableCell><DeleteIcon/></TableCell> */}
        
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
    DoctorID : PropTypes.string.isRequired,
    DoctorName: PropTypes.string.isRequired,
    DoctorNIC: PropTypes.string.isRequired,
    DoctorEmail: PropTypes.string.isRequired,
    DoctorSpecialist: PropTypes.instanceOf(Date).isRequired,
    Doctorcontact: PropTypes.string.isRequired,
    Doctorjoindate: PropTypes.string.isRequired,
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
  const [doctorid, setdoctorid] = useState("");
  const [name, setName] = useState("");
  const [Nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const[specialist, setSpecialist] = useState("");
  const [contact, setContact] = useState("");
  const [date_joined, setDate_joined] = useState("");
  const[status, setStatus] = useState("");



  const handleClickOpen = (row) => {

    setdoctorid(row.id);
    setName(row.name);
    setNic(row.nic);
    setEmail(row.email);
    setSpecialist(row.specialist);
    setContact(row.date_joined);
    setDate_joined(row.contact);
    setStatus(row.status);

    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
    const handleDelete = (doctor_Id) => {
      console.log("del");
      console.log("del",doctor_Id);
      deleteDoctor(doctor_Id).then((response) => {
        console.log("res",response);
        alert("Data successfully Deleted");
        window.location.reload(true);
      });
    };
  
  
  
  
    const editDoctor = () => {
      let doctor = {
        name: name,
        nic: Nic,
        email: email,
        specialist: specialist,
        contact: contact,
        date_joined: date_joined,
        status: status,
     
      };
  
      updateDoctor(doctorid,doctor)
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
          {"Update Doctor Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* add input feilds */}
            <InputFeild fristname="Doctor Name"  value={name} onChange={(e) => setName(e.target.value)}></InputFeild>
            <InputFeild fristname="Doctor NIC" value={Nic} onChange={(e) => setNic(e.target.value)}></InputFeild>
            <InputFeild fristname="Doctor Email" value={email} onChange={(e) => setEmail(e.target.value)}></InputFeild>
            <InputFeild fristname="Date Specialist" value={specialist} onChange={(e) => setSpecialist(e.target.value)}></InputFeild>
            <InputFeild fristname="Date Joined date" value={date_joined} onChange={(e) => setDate_joined(e.target.value)}></InputFeild>
            <InputFeild fristname="Status" value={status} onChange={(e) => setStatus(e.target.value)}></InputFeild>
            <InputFeild fristname="Contact" value={contact} onChange={(e) => setContact(e.target.value)}></InputFeild>
            {/* add input feilds */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editDoctor} autoFocus>
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
            <TableCell>Doctor ID</TableCell>
            <TableCell>Doctor Name</TableCell>
            <TableCell>Doctor NIC</TableCell>
            <TableCell>Doctor Email</TableCell>
            <TableCell>Doctor Specialist</TableCell>
            <TableCell>Doctor Date Joined</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Action</TableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
        {console.log("abf",props.list)}
          {props.list.map((row, index) => {
            return (
              <TableRow>
            <TableCell />
            <TableCell>{row.id} </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.nic}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.specialist}</TableCell>
            <TableCell>{row.date_joined}</TableCell>
            <TableCell>{row.contact}</TableCell>
            <TableCell>{row.status}</TableCell>


            {/* <TableCell> <button editbuttonname="Edit" variant="outlined" onClick={() => handleClickOpen(row)} >Edit</button> </TableCell>
            <TableCell> <button deletebuttonname="Delete" onClick={() => handleDelete(row.id)} >Detele</button> </TableCell> */}
           
            <TableCell><div className="row ">
              <div className="col-6 actionp"><IoMdOpen className="editbtn" size={27} editbuttonname="Edit" variant="outlined" onClick={() => handleClickOpen(row)} /></div>
              <div className="col-6 actionp"> <IoIosCloseCircle className="deletebtn" size={28}  deletebuttonname="Delete" onClick={() => handleDelete(row.id)} /></div>
            </div></TableCell>

          </TableRow>
            )
          })}
        </TableBody>
      </Table>
      
    </TableContainer>
</>
    
  );
}
