import React,{useState,useEffect,useRef} from "react";
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
import Addbutton from "../../Components/addbutton/addbutton";


import { deleteAppointments,updateAppointments} from '../../services/Appointments';

import { DownloadTableExcel } from 'react-export-table-to-excel';
import { IoIosCloseCircle,IoMdOpen,IoIosExit} from "react-icons/io";


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import InputFeild from "../../Components/InputFeild/inputfeild";


import SearchBar from "material-ui-search-bar";




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

  const [rows, setRows] = useState(props.list);

  const data = props.list;
  
  const [searched, setSearched] = useState("");

  console.log(rows)

  const requestSearch = (searchedVal) => {
    const filteredRows = props.list.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
  setRows(filteredRows);
};

const cancelSearch = () => {
  setSearched("");
  requestSearch(searched);
};

  const [open, setOpen] = React.useState(false);
  const[appointmentid,setappointmentid]=useState("");
const[date,setDate]=useState("");
const[type,setType]=useState("");
const[disease,setDisease]=useState("");
const[patientid,setPatientid]=useState("");
const[doctorId,setDoctorId]=useState("");
const[created_at , setCreated_at]=useState("");
  

const handleClickOpen = (row) => {

  setappointmentid(row.id);
  setDate(row.date);
  setType(row.type);
  setDisease(row.disease);
  setPatientid(row.patient_id);
  setDoctorId(row.doctor_id);
  setCreated_at(row.created_at);

  
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  const handleDelete = (AppointmentId) => {
    deleteAppointments(AppointmentId).then((response) => {
      console.log("res",response);
      alert("Data successfully Deleted");
      window.location.reload(true);
    });
  };




  const editAppoiment = () => {
    let appointment = {
    
   
      date:date,
      type:type,
      disease:disease,
      patient_id: parseInt(patientid),
      doctor_id: parseInt(doctorId),
      created_at:created_at



 
    };

    updateAppointments(appointmentid,appointment)
    .then((response) => {
      alert("Data successfully inserted");
      window.location.reload(true);
    })
    .catch((error) => {
      alert(error.message);
    });
};

const tableRef = useRef(null);

  return (

    <>

<Paper>
  <SearchBar
    value={searched}
    onChange={(searchVal) => requestSearch(searchVal)}
    onCancelSearch={() => cancelSearch()}
  />
  </Paper>



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
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="Appointment Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            ></InputFeild>
             <InputFeild
              fristname="Patient Patientid"
              value={patientid}
              onChange={(e) => setPatientid(e.target.value)}
            ></InputFeild>
              <InputFeild
              fristname="Doctor ID"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
            ></InputFeild>
            <InputFeild
              fristname="disease"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
            ></InputFeild>
       
           <InputFeild
              fristname="Contact"
              value={created_at}
              onChange={(e) => setCreated_at(e.target.value)}
            ></InputFeild> 
            {/* add input feilds */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editAppoiment} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    
    <div><DownloadTableExcel filename="Appointment-table-data-sheet" sheet="users" currentTableRef={tableRef.current}>
<button className="Exportsheet"> <IoIosExit size={20}/> {} Export Sheet </button>
</DownloadTableExcel> </div>

    <TableContainer component={Paper} >
      <Table aria-label="collapsible table" ref={tableRef}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Appointment ID </TableCell>
            <TableCell>Appointment Date </TableCell>
            <TableCell>Appointment Type</TableCell>
            <TableCell>Disease</TableCell>
            <TableCell>Patient ID</TableCell>
            <TableCell>DoctorID</TableCell>
            <TableCell>Appoiment open Date</TableCell>
            <TableCell>Action</TableCell>





          </TableRow>
        </TableHead>
        <TableBody  >
          {console.log("abf",props.list)}
          {props.list.map((row, index) => {
            return (
              <TableRow>
            <TableCell />
            <TableCell>{row.id} </TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.disease}</TableCell>
            <TableCell>{row.patient_id}</TableCell>
            <TableCell>{row.doctor_id}</TableCell>
            <TableCell>{row.created_at}</TableCell>
        








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
