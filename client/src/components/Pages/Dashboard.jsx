import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Nav, Row ,Card, Form, Container} from "react-bootstrap";
import SideNavBar from './SideNavBar';
import Chart from 'react-apexcharts'
import Axios from 'axios';
import { hostUrl } from '../utils/hostUrl';


function Dashboard() {
    
    const [innovatorsCount, setinnovatorsCount] = useState(0);
    useEffect(() => {
      Axios.get(`${hostUrl}/api/getInnovatorsTotal`)
      .then((response) => setinnovatorsCount(response.data))
      .catch((err) => console.error(err));
      console.log(innovatorsCount);
    }, [innovatorsCount]);


    const [innovationCount, setinnovationCount] = useState(0);
    useEffect(() => {
      Axios.get(`${hostUrl}/api/getInnovationTotal`)
      .then((response) => setinnovationCount(response.data))
      .catch((err) => console.error(err));
      console.log(innovationCount);
    }, [innovationCount]);


    const [journalsCount, setjournalsCount] = useState(0);
    // useEffect(() => {
    //   Axios.get(`${hostUrl}/api/getjournalsTotal`)
    //   .then((response) => setjournalsCount(response.data))
    //   .catch((err) => console.error(err));
    //   console.log(journalsCount);
    // }, [journalsCount]);


    var data = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
      };

    return (
        <div style={{marginTop:100}}>
            <Row>
    <Col sm={2}>
        <SideNavBar active={'dashboard'} />
    </Col>

    <Col sm={10}>
    <Row>
            <div style={{padding: 10 , color:'#30408D'}}>
                <h1>Dashboard</h1>
            </div>
        </Row>

        <Row>
            <Card style={{height:100}}>
                <div style={{display:'inline-block', marginTop:25}}>
                    <p style={{display:'inline-block', marginRight:10}}>As of Date:</p>
                    <div style={{width:150 ,display:'inline-block'}}>
                    <Form.Select aria-label="Default select example">
                    <option value="1">TODAY</option>
                    <option value="2">Last 7 days</option>
                    <option value="3">Last 30 days</option>
                    <option value="4">Last 365 days</option>
                    </Form.Select>
                    </div>
                </div>
            </Card>
            <Card style={{height:'65vh'}}>
                <div style={{display:'inline-block', marginTop:25}}>
                    <Row>
                        <Col sm={4}>
                            <Container>
                            <Card style={{width:300, height: 150, margin:'auto'}}>
                                <p style={{margin:15, fontWeight:'bold'}}>Innovators</p>
                                <Container style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:40, fontWeight:'bold'}}>
                                   {innovatorsCount}
                                </Container>
                            </Card>
                            </Container>
                        </Col>

                        <Col sm={4}>
                            <Container>
                            <Card style={{width:300, height: 150, margin:'auto'}}>
<p style={{margin:15, fontWeight:'bold'}}>Innovation Product</p>
<Container style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:40, fontWeight:'bold'}}>
                                    {innovationCount}
                                </Container>
                            </Card>
                            </Container>
                        </Col>

                        <Col sm={4}>
                            <Container>
                            <Card style={{width:300, height: 150, margin:'auto'}}>
<p style={{margin:15, fontWeight:'bold'}}>Uploaded journals</p>
<Container style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:40, fontWeight:'bold'}}>
                                    {journalsCount}
                                </Container>
                            </Card>
                            </Container>
                        </Col>
                        

                        <Row>
            <div style={{padding: 10 ,}}>
                <h1>Charts</h1>
            </div>
        </Row>

        
        <Row>
            <div style={{padding: 10 ,}}>
            <Chart options={data.options} series={data.series} type="line"  height={320} />
            </div>
        </Row>
                        
                    </Row>
                </div>
            </Card>


        </Row>
       </Col>
       </Row>
        </div>
    )
}

export default Dashboard
