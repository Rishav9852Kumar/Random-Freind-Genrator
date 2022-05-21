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
    
    <Container fluid className="p-4  App">
    
    <Row>
      <Col md={4} classNmae="offset-md-4 mt-4">
        <MyCard details={details}/>
      </Col>
      <Col>
      <Button outline color="warning" onClick={fetchDetails}>Next Profile</Button>
      </Col>
    </Row>
 
    </Container>
    
    </div>
     
  );
}

export default App;
