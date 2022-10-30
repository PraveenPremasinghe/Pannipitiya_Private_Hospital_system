import * as React from 'react';
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

        <TableCell><EditIcon/></TableCell>
        <TableCell><DeleteIcon/></TableCell>
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

const rows = [
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),
  createData("001","973040090V","Praveen","kaluwa@gmail.com","10/29/2020","Dr.Kaluwa","head pain","in",156,0),

 
];

export default function CollapsibleTable() {
  return (

    
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
            <TableCell>Doctor Assigned</TableCell>
            <TableCell>Disease</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Room Number</TableCell>
            <TableCell>Contact</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>

    
  );
}
