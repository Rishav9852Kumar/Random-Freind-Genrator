import React from "react";
import {Card,CardBody,CardTitle,CardText,Button} from "reactstrap"
import{FaEnvelope,FaMapMarkerAlt,FaPhone} from "react-icons/fa"


const MyCard =({details}) => {
    return(
        <Card fluid>
            <CardBody className="text-center text-primary">
                <img height="150" width="150" 
                className="rounded-circle img-thumbnail border-danger" 
                src={details.picture?.large} alt="profilepic"/>
           <CardTitle>
                <h3>
                    <span className="pr-4">{details.name?.title+" "}</span>
                    <span>{details.name?.first+" "}</span>
                    <span>{details.name?.last}</span>
                </h3>
            </CardTitle>
            <CardText >
                <FaMapMarkerAlt/>
                {" "+details.location?.city}
                <p><FaPhone/>
                {" "+ details.phone}
                <br/>
                <FaEnvelope/>
                {" "+details.email}<br/>
                <Button outline color="dark">Age : {details.dob?.age}</Button>
                </p>
            </CardText>
            </CardBody>
            
        </Card>
    );
}
export default MyCard;