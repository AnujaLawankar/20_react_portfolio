import React from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';
import resumePic from '../../images/laptop-resume.jpg';

const Resume = () => {
    const pdfUrl = 'https://www.dropbox.com/scl/fi/r6js9b1a5s68k882eito8/Anuja_Lawankar_Resume_2023.pdf?rlkey=xinmm0q4i2vgpu1vxprugh5sk&dl=0'


    return (
        <MDBContainer fluid className="vh-100">
            {/* stored at "https://www.dropbox.com/s/9gg4m98v8e5vxhn/Cliff_Rosenberg_Resume.pdf?dl=0" */}
            <div className="d-flex justify-content-center">
                <MDBCard className="w-25">
                    <MDBCardImage className="img-thumbnail" position="top" src={resumePic} />
                    <MDBCardBody>
                        <MDBCardTitle>Download Resume:</MDBCardTitle>
                        <MDBCardText>Press the button below to download a copy of my resume.</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className="text-center">
                        <MDBBtn href={pdfUrl}>DOWNLOAD</MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </div>
        </MDBContainer>
    )
};

export default Resume;