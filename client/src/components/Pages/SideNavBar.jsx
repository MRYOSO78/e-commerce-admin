import React, {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Nav, Row ,Tab, Container, Image,} from "react-bootstrap";
import { HiHome } from "react-icons/hi";
import { MdEqualizer, MdList,  } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import  '../../css/SystemAdmin.css';

function SideNavBar(props) {

    const [dashboard, setdashboard] = useState();
    const [users, setusers] = useState();
    const [productsOrders, setproductsOrders] = useState();
    const [exhibits, setexhibits] = useState();
    const [reports, setreports] = useState();
    const [onclickManagement, setonclickManagement] = useState(true);
  
    useEffect(() => {
      if (props.active === "dashboard") {
        setdashboard("#5B5D6D");
      } else if (props.active === "users") {
        setusers("#5B5D6D");
        setonclickManagement(false);
      } else if (props.active === "productsOrders") {
        setproductsOrders("#5B5D6D");
        setonclickManagement(false);
      } else if (props.active === "exhibits") {
        setexhibits("#5B5D6D");
        setonclickManagement(false);
      } else if (props.active === "reports") {
        setreports("#5B5D6D");
      }
    }, []);
    return (
        <div>

<div id="sideNavBar">
     
     <Container
       id="ContainerNavItem"
       style={{
         backgroundColor: dashboard,
         marginTop:50
       }}
     >
       <a id="anchorTag" href="/">
         <HiHome id="icons" />
         Dashboard
       </a>
     </Container>

     <Container
       id="ContainerNavItem"
       style={{

         cursor:'pointer'
       }}
       onClick={() =>
         setonclickManagement(!onclickManagement)
       }
     >
       <MdList id="icons" />
       <p id="anchorTag" >
        Management
       </p>
     </Container>

<div hidden={onclickManagement}> 
     <Container
       id="ContainerNavItem"
       style={{
         backgroundColor: users,
       }}
     >
       
       <a id="anchorTag" href="/users" 
       style={{marginLeft:'35%'}}>
         Users
       </a>
     </Container>

     <Container
       id="ContainerNavItem"
       style={{
         backgroundColor: productsOrders,
       }}
     >
       
       <a id="anchorTag" href="/products & orders" 
       style={{marginLeft:'35%'}}>
         Products & Orders
       </a>
     </Container>

     <Container
       id="ContainerNavItem"
       style={{
         backgroundColor: exhibits,
       }}
     >
      
       <a id="anchorTag" href="/exhibits" 
       style={{marginLeft:'35%'}}>
         Exhibits
       </a>
     </Container>

     </div>
     <Container
       id="ContainerNavItem"
       style={{
         backgroundColor: reports,
       }}
     >
       <MdEqualizer id="icons" />
       <a id="anchorTag" href="/reports">
         Reports
       </a>
     </Container>

     <hr />
    
   </div>


        
        
      
      </div>
    );
  }

export default SideNavBar
