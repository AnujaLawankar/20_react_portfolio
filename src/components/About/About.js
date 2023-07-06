import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './About.css'
import anu from '../../images/Anuja.png';

const About = () => {
    return (
        <MDBContainer fluid className="vh-100 bkgrd">
            <div className="d-flex justify-content-center flex-column flex-sm-row">

                <MDBCard className="order-sm-2 card-picture my-4 mx-auto mx-sm-0">
                    <MDBCardImage variant="top" className="img-fluid rounded" src={anu} />
                </MDBCard>

                <MDBCard border="dark" className="order-sm-1 my-4 card-text mx-auto mx-sm-0">
                    <MDBCardBody>
                        <MDBCardTitle>About Anuja</MDBCardTitle>
                        <MDBCardText>
                            I am a highly analytical software testing professional with 2 years of experience in the industry.
                            Currently, I am a MSU bootcamp student.  Based in Grand Rapids, MI, I am a hard-working, detail-oriented Software Developer passionate about learning, researching, and writing code and I relish the opportunity to take my programming skills and experience to a company where I can continue to learn and grow as a professional software developer.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </MDBContainer>
    )
};

export default About;