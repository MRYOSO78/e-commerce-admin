import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row ,Tab, Container, Image, Overlay, OverlayTrigger, Button, Modal} from "react-bootstrap";
import SideNavBar from './SideNavBar';
import MaterialTable from 'material-table';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Axios from 'axios';
import {Link, NavLink} from 'react-router-dom';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function MyVerticallyCenteredModal(props) {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Registration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
     
        
         
      <Button type="submit">Submit form</Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function Users() {

  const [user_id, setUserId] = useState("");
  const [user_fname, setUserFName] = useState("");
  const [user_lname, setUserLName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_contact, setUserContact] = useState("");
  const [user_address, setUserAddress] = useState("");
  const [userlists, setUserLists] = useState("");

    const StyledMenu = styled((props) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          {...props}
        />
      ))(({ theme }) => ({
        '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
          color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 18,
              color: theme.palette.text.secondary,
              marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
              ),
            },
          },
        },
      }));

      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

      const [modalShow, setModalShow] = React.useState(false);

      const useStyles = makeStyles((theme) => ({
        table: {
          minWidth: 650,
        },
        tableContainer: {
            // borderRadius: 15,
            margin: '10px 10px',
            maxWidth: 950
        },
        tableHeaderCell: {
            fontWeight: 'bold',
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.getContrastText(theme.palette.primary.dark)
        },
        avatar: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.getContrastText(theme.palette.primary.light)
        },
        name: {
            fontWeight: 'bold',
            color: theme.palette.secondary.dark
        },
        status: {
            fontWeight: 'bold',
            fontSize: '0.75rem',
            color: 'white',
            backgroundColor: 'grey',
            borderRadius: 8,
            padding: '3px 10px',
            display: 'inline-block'
        }
      }));

      const classes = useStyles();
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
     const [search, setSearch] = useState("");
    
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };


  //  useEffect(() => {
  //     Axios.get('http://localhost:5000/api/getUsers').then((response) => {
  //       setUserLists(response.data);
  //       console.log(response.data);
  //     })
  //  }, [])


  const [userslist, setuserslist]=useState([])
  useEffect(()=>{
      Axios.get('http://localhost:5000/api/getUsers').then(
          res=>{
              console.log(res);
              setuserslist(res.data);
          }
      ).catch(err=>{
          console.log(err);
      })
      
  },[])
  const usersdata = userslist.filter((obj) => {
    if (search == ""){
      return obj;
    }
    else if (obj.user_fname.toLowerCase().includes(search.toLowerCase())){
      return obj;
    }
  }).map((obj)=>{
      return <tr>
          <td>{obj.user_id}</td>
          <td>{obj.user_fname}</td>
          <td>{obj.user_lname}</td>
          <td>{obj.user_email}</td>
          <td>{obj.user_contact}</td>
          <td>{obj.user_address}</td>
         
          <td><a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a></td>
      </tr>
  })

  
 
    return (
        <div style={{marginTop:100}}>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            <Row>
    <Col sm={2}>
        <SideNavBar active={'users'} />
    </Col>
    <Col sm={10}>
    <main>
        <div className='form-inputs' style={{height:"10px", width:"500px", marginTop: "1%", marginBottom:"4%", marginLeft:"46%"}}>
                <input
                  className='form-control'
                  type='text'
                  name='notifyaddress'
                  placeholder='Search'
                  onChange={event => {setSearch(event.target.value)}}
                />
       </div>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>User ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>First Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Last Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Email</TableCell>
            <TableCell className={classes.tableHeaderCell}>Contact Number</TableCell>
            <TableCell className={classes.tableHeaderCell}>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userslist.filter((obj) => {
            if (search == ""){
              return obj;
            }
            else if (obj.user_id.toLowerCase().includes(search.toLowerCase()) || obj.user_fname.toLowerCase().includes(search.toLowerCase()) || obj.user_lname.toLowerCase().includes(search.toLowerCase())){
              return obj;
            }
          }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((obj) => (
            <TableRow>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={obj.user_Id} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                        <Typography color="textSecondary" variant="body2">{obj.user_id}</Typography>
            
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
              <Link to = "/" style={{textDecoration:"none"}}> <Typography className={classes.name}>{obj.user_fname}</Typography> </Link> 
                  {/* <Typography color="textSecondary" variant="body2">{obj.lastname}</Typography> */}
                </TableCell>
              <TableCell>
              <Link to = "/" style={{textDecoration:"none"}}> <Typography className={classes.name}>{obj.user_lname}</Typography> </Link>
              </TableCell>
          
              <TableCell>
              <Typography color="primary" variant="subtitle2">{obj.user_email}</Typography>
              </TableCell>
              <TableCell>
              <Typography color="primary" variant="subtitle2">{obj.user_contact}</Typography>
              </TableCell>
              <TableCell>
              <Typography color="primary" variant="subtitle2">{obj.user_address}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
        style={{width:"400px"}}
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={usersdata.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
    <script src ="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></script>
    <script src="assets/libs/jquery/dist/jquery.min.js"></script>

    <script src="assets/libs/popper.js/dist/umd/popper.min.js"></script>
    <script src="assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
    
    <script src="assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="assets/extra-libs/sparkline/sparkline.js"></script>
    
    <script src="dist/js/waves.js"></script>
    
    <script src="dist/js/sidebarmenu.js"></script>
    
    <script src="dist/js/custom.min.js"></script>
  
    <script src="assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
    <script src="assets/extra-libs/multicheck/jquery.multicheck.js"></script>
    <script src="assets/extra-libs/DataTables/datatables.min.js"></script>
    <script>
        /****************************************
         *       Basic Table                   *
         ****************************************/
        $('#zero_config').DataTable();
    </script>

        </main>

        
        

    </Col>
    </Row>
        </div>
    )
}

export default Users
