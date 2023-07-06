import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import home2 from '../../images/home.png'

const Home = () => {
    return (
        <MDBContainer fluid className="text-center vh-100 bkgrd">
            <div className="pt-2 vh-100">
                <img src={home2} className='img-fluid rounded-pill shadow-4-strong' alt='Anuja-home' />
                <p className=" my-0 py-0 text-dark fs-1">Welcome to Anuja's portfolio page!</p>
            </div>

        </MDBContainer>
    )
};

export default Home;