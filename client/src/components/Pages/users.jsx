import React, { useState , useEffect} from 'react'
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
import { hostUrl } from '../utils/hostUrl';

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

    const [user, setuser] = useState([]);
    useEffect(() => {
      Axios.get(`${hostUrl}/api/getUsers`)
      .then((response) => setuser(response.data))
      .catch((err) => console.error(err));
      console.log(user);
    }, []);


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

    var data = [
        { user_id: '101', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '102', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '103', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '104', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '105', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '106', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '107', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '108', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '109', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '110', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '111', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
        { user_id: '112', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' ,contact_number:'090807064578', address: '2529 AU' },
      ];
   
      const [modalShow, setModalShow] = React.useState(false);

   


 
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
        <Row>
            <div style={{padding: 10 , color:'#30408D'}}>
                <h1>Users</h1>
            </div>
        </Row>

        <Row>
            <div style={{padding:20}}>
            <MaterialTable
            
      title=""
      columns={[
        { title: 'User ID', field: 'user_id' },
        { title: 'First Name', field: 'user_fname' },
        { title: 'Last Name', field: 'user_lname'},
        { title: 'Email', field: 'user_email'},
        { title: 'Contact Number', field: 'user_contact'},
        { title: 'Address', field: 'user_address'},
        {
            title: '',
            render: rowData => <div style={{cursor:'pointer'}}> 
               
                <MoreHorizIcon onClick={handleClick} />
                <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
         <strong> Edit </strong>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon style={{color:'red'}}/>
         <strong style={{color:'red', marginTop:5}}>Archive</strong> 
        </MenuItem>
      </StyledMenu>

                 </div>
          }
        
      ]}
      data={user}        
      options={{
        sorting: true,
      }}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event, rowData) => {
            setModalShow(true);
          }
        },
        {
            icon: ArchiveIcon,
            tooltip: 'View Archive',
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row")
          }
      ]}
    />
            </div>
        </Row>

        
        <Row>
            <div style={{padding: 10 , color:'#30408D'}}>
                <h1>News Letter</h1>
            </div>
        </Row>

        <Row>
            <div style={{padding:20}}>
            <MaterialTable
      title=""
      columns={[
        { title: 'User ID', field: 'user_id' },
        { title: 'First Name', field: 'firstname' },
        { title: 'Last Name', field: 'lastname'},
        { title: 'Email', field: 'email'},
        {
            title: '',
            render: rowData => <div style={{cursor:'pointer'}}> 
               
                <MoreHorizIcon onClick={handleClick} />
                <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
         <strong> Edit </strong>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon style={{color:'red'}}/>
         <strong style={{color:'red', marginTop:5}}>Archive</strong> 
        </MenuItem>
      </StyledMenu>

                 </div>
          }
        
      ]}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add Subscriber',
          isFreeAction: true,
          onClick: (event, rowData) => {
            setModalShow(true);
          }
        },
        {
            icon: ArchiveIcon,
            tooltip: 'View Archive',
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row")
          }
      ]}
      data={[
        { user_id: '101', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' },
        { user_id: '102', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' },
        { user_id: '103', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' },
        { user_id: '104', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' },
        { user_id: '105', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' },
        { user_id: '106', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' },
        { user_id: '107', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' },
        { user_id: '108', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' },
        { user_id: '109', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' },
        { user_id: '110', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' },
        { user_id: '111', firstname: 'Baran', lastname: 'Musfet', email: 'ZeryaBetül@gmail.com' },
        { user_id: '112', firstname: 'Baran', lastname: 'Longan', email: 'ZeryaBetül@gmail.com' },
      ]}        
      options={{
        sorting: true
      }}
    />
            </div>
        </Row>

    </Col>
    </Row>
        </div>
    )
}

export default Users
