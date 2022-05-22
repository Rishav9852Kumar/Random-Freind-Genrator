import React,{useState,useEffect} from 'react';
import {Container, Row, Col,Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from "./MyCard";
import './App.css';

import Axios from "axios";



function App() {
  const [details,setDetails]=useState({});
  const fetchDetails= async() =>{
    const {data} =await Axios.get("https://randomuser.me/api/");
    console.log("Data: ", data);

    const details=data.results[0];
    setDetails(details);
  }
  useEffect(() => {
     fetchDetails(); 
  },[]);
  
  return (
    <div>
    <h1>Random Friend Generator</h1>
    
    <Container fluid className="p-2  App">
    
    <Row>
      <Col md={4} className="offset-md-4 ">
        <MyCard details={details}/>
      </Col>
     
    </Row>
    <Row>
      <Col md={4} className="offset-md-5 ">
    <Button className ="mt-3 mr-2"outline color="warning" onClick={fetchDetails}>Random friend</Button>
     
      </Col>
    </Row>
    </Container>
    
    </div>
     
  );
}

export default App;
