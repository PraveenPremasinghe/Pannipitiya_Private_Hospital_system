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
import { deleteStaff ,updateStaff} from "../../services/Staff";


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import InputFeild from "../../Components/InputFeild/inputfeild";

import { IoIosCloseCircle,IoMdOpen} from "react-icons/io";



function createData(StaffmemberID,Staffmembername,StaffmemberNIC,Staffmemberemail,doctoremail,Starffmembercontact,Starffmemberstatus) {
  return {

    StaffmemberID,
    Staffmembername,
    StaffmemberNIC,
    Staffmemberemail,
    doctoremail,
    Starffmembercontact,
    Starffmemberstatus,



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
          {row.StaffmemberID }
        </TableCell>
        <TableCell align="center">{row.Staffmembername}</TableCell>
        <TableCell align="center">{row.StaffmemberNIC}</TableCell>
        <TableCell align="center">{row.Staffmemberemail}</TableCell>
        <TableCell align="center" >{row.doctoremail}</TableCell>
        <TableCell align="center">{row.Starffmembercontact}</TableCell>
        <TableCell align="center">{row.Starffmemberstatus}</TableCell>
   

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
    StaffmemberID : PropTypes.string.isRequired,
    Staffmembername: PropTypes.string.isRequired,
    Staffmemberemail: PropTypes.string.isRequired,
    doctoremail: PropTypes.string.isRequired,
    Starffmembercontact: PropTypes.instanceOf(Date).isRequired,
    Starffmemberstatus: PropTypes.string.isRequired,
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
  const [staffid, setstaffid] = useState("");
  const [name, setName] = useState("");
  const [Nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  // const [doctorid , setDoctorid] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState("");
  

const handleClickOpen = (row) => {

  setstaffid(row.id);
  setName(row.name);
  setNic(row.nic);
  setEmail(row.email);
  // setDoctorid(row.doctorid);
  setStatus(row.status);
  setContact(row.contact);

  
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  const handleDelete = (staff_id) => {
    console.log("del");
    console.log("del",staff_id);
    deleteStaff (staff_id).then((response) => {
      console.log("res",response);
      alert("Data successfully Deleted");
      window.location.reload(true);
    });
  };



  const editStaff = () => {
    let staff = {
      name: name,
      nic:Nic,
      email: email,
      // doctorid:doctorid,
      status: status,
      contact:contact,
      
   
    };


    updateStaff(staffid,staff)
    .then((response) => {
      alert("Data successfully inserted");
      window.location.reload(true);
    })
    .catch((error) => {
      alert(error.message);
    });
};


  return (

    <div> 
    

    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Staff member  Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* add input feilds */}
            <InputFeild fristname="Staff member Name"  value={name} onChange={(e) => setName(e.target.value)}></InputFeild>
            <InputFeild fristname="Staff member NIC" value={Nic} onChange={(e) => setNic(e.target.value)}></InputFeild>
            <InputFeild fristname="Staff member Email" value={email} onChange={(e) => setEmail(e.target.value)}></InputFeild>
            {/* <InputFeild fristname="Doctor ID" value={doctorid} onChange={(e) => setDoctorid(e.target.value)}></InputFeild> */}
            <InputFeild fristname="Contact" value={contact} onChange={(e) => setContact(e.target.value)}></InputFeild>
            <InputFeild fristname="Status" value={status} onChange={(e) => setStatus(e.target.value)}></InputFeild>
            {/* add input feilds */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editStaff} autoFocus>
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
            <TableCell>Member ID </TableCell>
            <TableCell>Member Name</TableCell>
            <TableCell>Member NIC</TableCell>
            <TableCell>Member Email</TableCell>
            {/* <TableCell>Staff Doctor ID</TableCell> */}
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
            {/* <TableCell>{row.doctorid}</TableCell> */}
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

     

    </div>

  );
}
