import React, {useState} from 'react'
import { Col, Nav, Row , Container, Image,Modal, Form, Button} from "react-bootstrap";
import SideNavBar from './SideNavBar';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


function ProductsOrders() {
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

      const [modalShow, setModalShow] = React.useState(false);

      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [valueSecond, setValueSecond] = React.useState(0);
  const handleChangeSecond = (event, newValue) => {
    setValueSecond(newValue);
  };
    return (
        <div style={{marginTop:100}}>
           
            <Row>
            
    <Col sm={2}>
        <SideNavBar active={'productsOrders'} />
    </Col>

    <Col sm={10}>
    <Row>
            <div style={{padding: 10 , color:'#30408D'}}>
                <h1>Product & Orders</h1>
            </div>
        </Row>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Products" {...a11yProps(0)} />
          <Tab label="Orders" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <MaterialTable
      title=""
      columns={[
        { title: 'Product ID', field: 'product_id' },
        { title: 'Price', field: 'price' },
        { title: 'Status', field: 'status'},
        { title: 'Link', field: 'link'},
        { title: 'Category', field: 'category' },
        { title: 'Image', field: 'image'},
        { title: 'Exhibit', field: 'exhibit_id'},
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
        { product_id: '101', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'101' },
        { product_id: '102', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'102' },
        { product_id: '103', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'103' },
        { product_id: '104', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'104' },
        { product_id: '105', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'105' },
        { product_id: '106', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'106' },
        { product_id: '107', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'107' },
        { product_id: '108', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'108' },
        { product_id: '109', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'109' },
        { product_id: '110', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'110' },
        { product_id: '111', price: 100, status: 'Pending', link:'www.google.com',category: 'books' , image:'www.google.com', exhibit_id:'111' },
        { product_id: '112', price: 100, status: 'Pending', link:'www.google.com',category: 'Souvenir' , image:'www.google.com', exhibit_id:'112' },
      ]}        
      options={{
        sorting: true
      }}
    />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <MaterialTable
      title=""
      columns={[
        { title: 'Order ID', field: 'order_id' },
        { title: 'Order Date', field: 'order_date' },
        { title: 'Product ID', field: 'product_id'},
        { title: 'Payment Proof', field: 'payment_proof'},
        { title: 'Payment Type', field: 'payment_total'},
        { title: 'Order Total', field: 'order_total'},

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
        { order_id: '101', order_date: '10-12-2021' , product_id: '101', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '102', order_date: '10-12-2021' , product_id: '102', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '103', order_date: '10-12-2021' , product_id: '103', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '104', order_date: '10-12-2021' , product_id: '104', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '105', order_date: '10-12-2021' , product_id: '105', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '106', order_date: '10-12-2021' , product_id: '106', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '107', order_date: '10-12-2021' , product_id: '107', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '108', order_date: '10-12-2021' , product_id: '108', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '109', order_date: '10-12-2021' , product_id: '109', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '110', order_date: '10-12-2021' , product_id: '110', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '111', order_date: '10-12-2021' , product_id: '111', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
        { order_id: '112', order_date: '10-12-2021' , product_id: '112', payment_proof:'www.google.com',payment_total: 100 , order_total: 200},
      ]}        
      options={{
        sorting: true
      }}
    />
      </TabPanel>
      
    </Box>


    <Row>
            <div style={{padding: 10 , color:'#30408D'}}>
                <h1>Product Categories</h1>
            </div>
        </Row>

        <Row>
            <div style={{padding:20}}>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueSecond} onChange={handleChangeSecond} aria-label="basic tabs example">
          <Tab label="Souvenir" {...a11yProps(0)} />
          <Tab label="Book" {...a11yProps(1)} />
          <Tab label="Innovation" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={valueSecond} index={0}>
 {/* //Souvenir */}

      <div style={{padding:20}}>
            <MaterialTable
      title=""
      columns={[
        { title: 'Souvenir ID', field: 'souvenir_id' },
        { title: 'Souvenir Name', field: 'souvenirname' },
        { title: 'Souvenir Description', field: 'souvenir_desc'},
        { title: 'Seller ID', field: 'seller_id'},
        { title: 'Product ID', field: 'product_id'},
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
        { souvenir_id: '101', souvenirname: 'Baran', souvenir_desc: 'Musfet', seller_id: 1001 , product_id:101},
        { souvenir_id: '102', souvenirname: 'Baran', souvenir_desc: 'Longan', seller_id: 1001 , product_id:102},
        { souvenir_id: '103', souvenirname: 'Baran', souvenir_desc: 'Musfet', seller_id: 1001 , product_id:103},
        { souvenir_id: '104', souvenirname: 'Baran', souvenir_desc: 'Longan', seller_id: 1001 , product_id:104},
        { souvenir_id: '105', souvenirname: 'Baran', souvenir_desc: 'Musfet', seller_id: 1001 , product_id:105},
        { souvenir_id: '106', souvenirname: 'Baran', souvenir_desc: 'Longan', seller_id: 1001 , product_id:106},
        { souvenir_id: '107', souvenirname: 'Baran', souvenir_desc: 'Musfet', seller_id: 1001 , product_id:107},
        { souvenir_id: '108', souvenirname: 'Baran', souvenir_desc: 'Longan', seller_id: 1001 , product_id:108},
        { souvenir_id: '109', souvenirname: 'Baran', souvenir_desc: 'Musfet', seller_id: 1001 , product_id:109},
        { souvenir_id: '110', souvenirname: 'Baran', souvenir_desc: 'Longan', seller_id: 1001 , product_id:110},
        { souvenir_id: '111', souvenirname: 'Baran', souvenir_desc: 'Musfet', seller_id: 1001 , product_id:111},
        { souvenir_id: '112', souvenirname: 'Baran', souvenir_desc: 'Longan', seller_id: 1001 , product_id:112},
      ]}        
      options={{
        sorting: true
      }}
    />
            </div>
      </TabPanel>
      <TabPanel value={valueSecond} index={1}>
        {/* Book */}
        <div style={{padding:20}}>
            <MaterialTable
      title=""
      columns={[
        { title: 'Book ID', field: 'book_id' },
        { title: 'Book Name', field: 'bookname' },
        { title: 'Book Author', field: 'author'},
        { title: 'Book Description', field: 'book_desc'},
        { title: 'Product ID', field: 'product_id'},
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
        { book_id: '101', bookname: 'Baran', author: 'Musfet', book_desc: 'ZeryaBetül@gmail.com',product_id: '101' },
        { book_id: '102', bookname: 'Baran', author: 'Longan', book_desc: 'ZeryaBetül@gmail.com',product_id: '102' },
        { book_id: '103', bookname: 'Baran', author: 'Musfet', book_desc: 'ZeryaBetül@gmail.com',product_id: '103' },
        { book_id: '104', bookname: 'Baran', author: 'Longan', book_desc: 'ZeryaBetül@gmail.com',product_id: '104' },
        { book_id: '105', bookname: 'Baran', author: 'Musfet', book_desc: 'ZeryaBetül@gmail.com',product_id: '105' },
        { book_id: '106', bookname: 'Baran', author: 'Longan', book_desc: 'ZeryaBetül@gmail.com',product_id: '106' },
        { book_id: '107', bookname: 'Baran', author: 'Musfet', book_desc: 'ZeryaBetül@gmail.com',product_id: '107' },
        { book_id: '108', bookname: 'Baran', author: 'Longan', book_desc: 'ZeryaBetül@gmail.com',product_id: '108' },
        { book_id: '109', bookname: 'Baran', author: 'Musfet', book_desc: 'ZeryaBetül@gmail.com',product_id: '109' },
        { book_id: '110', bookname: 'Baran', author: 'Longan', book_desc: 'ZeryaBetül@gmail.com',product_id: '110' },
        { book_id: '111', bookname: 'Baran', author: 'Musfet', book_desc: 'ZeryaBetül@gmail.com',product_id: '111' },
        { book_id: '112', bookname: 'Baran', author: 'Longan', book_desc: 'ZeryaBetül@gmail.com',product_id: '112' },
      ]}        
      options={{
        sorting: true
      }}
    />
            </div>
      </TabPanel>
      <TabPanel value={valueSecond} index={2}>
        {/* Innovation */}
        <div style={{padding:20}}>
            <MaterialTable
      title=""
      columns={[
        { title: 'Innovation ID', field: 'innovation_id' },
        { title: 'Innovation Name', field: 'innovationname' },
        { title: 'Innovation Description', field: 'innovation_desc'},
        { title: 'Innovation Story', field: 'innovation_story'},
        { title: 'Innovation Status', field: 'innovation_status' },
        { title: 'Product ID', field: 'product_id' },
        { title: 'Innovator ID', field: 'innovator_id'},
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
        { innovation_id: '101', innovationname: 'Baran', innovation_desc: 'Musfet', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Musfet', product_id: '101',innovator_id: '101'},
        { innovation_id: '102', innovationname: 'Baran', innovation_desc: 'Longan', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Longan', product_id: '102',innovator_id: '102'},
        { innovation_id: '103', innovationname: 'Baran', innovation_desc: 'Musfet', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Musfet', product_id: '103',innovator_id: '103'},
        { innovation_id: '104', innovationname: 'Baran', innovation_desc: 'Longan', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Longan', product_id: '104',innovator_id: '104'},
        { innovation_id: '105', innovationname: 'Baran', innovation_desc: 'Musfet', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Musfet', product_id: '105',innovator_id: '105'},
        { innovation_id: '106', innovationname: 'Baran', innovation_desc: 'Longan', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Longan', product_id: '106',innovator_id: '106'},
        { innovation_id: '107', innovationname: 'Baran', innovation_desc: 'Musfet', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Musfet', product_id: '107',innovator_id: '107'},
        { innovation_id: '108', innovationname: 'Baran', innovation_desc: 'Longan', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Longan', product_id: '108',innovator_id: '108'},
        { innovation_id: '109', innovationname: 'Baran', innovation_desc: 'Musfet', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Musfet', product_id: '109',innovator_id: '109'},
        { innovation_id: '110', innovationname: 'Baran', innovation_desc: 'Longan', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Longan', product_id: '110',innovator_id: '110'},
        { innovation_id: '111', innovationname: 'Baran', innovation_desc: 'Musfet', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Musfet', product_id: '111',innovator_id: '111'},
        { innovation_id: '112', innovationname: 'Baran', innovation_desc: 'Longan', innovation_story: 'ZeryaBetül@gmail.com' , innovation_status: 'Longan', product_id: '112',innovator_id: '112'},
      ]}        
      options={{
        sorting: true
      }}
    />
            </div>
      </TabPanel>
    </Box>
            </div>
        </Row>
    </Col>


    </Row>
    
        </div>
    )
}

export default ProductsOrders
