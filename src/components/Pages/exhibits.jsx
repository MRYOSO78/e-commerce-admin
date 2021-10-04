import React , {useState}from 'react'
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

function Exhibits() {

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
            <Row>
    <Col sm={2}>
        <SideNavBar active={'exhibits'} />
    </Col>

    <Col sm={10}>
    <Row>
            <div style={{padding: 10 , color:'#30408D'}}>
                <h1>Exhibits</h1>
            </div>
        </Row>

        <Row>
            <div style={{padding:20}}>
            <MaterialTable
      title=""
      columns={[
        { title: 'Exhibit ID', field: 'exhibit_id' },
        { title: 'Year', field: 'year' },
        { title: 'Term', field: 'term'},
        { title: 'Date', field: 'date'},
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
        { exhibit_id: '101', year: 'Baran', term: 'Musfet', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '102', year: 'Baran', term: 'Longan', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '103', year: 'Baran', term: 'Musfet', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '104', year: 'Baran', term: 'Longan', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '105', year: 'Baran', term: 'Musfet', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '106', year: 'Baran', term: 'Longan', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '107', year: 'Baran', term: 'Musfet', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '108', year: 'Baran', term: 'Longan', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '109', year: 'Baran', term: 'Musfet', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '110', year: 'Baran', term: 'Longan', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '111', year: 'Baran', term: 'Musfet', date: 'ZeryaBetül@gmail.com' },
        { exhibit_id: '112', year: 'Baran', term: 'Longan', date: 'ZeryaBetül@gmail.com' },
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

export default Exhibits
