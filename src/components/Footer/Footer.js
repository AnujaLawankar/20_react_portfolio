import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <span>
                    <a rel="noreferrer" href='https://www.linkedin.com/in/anuja-lawankar-0131bbb2/' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" size='2x' />
                    </a>
                    <a rel="noreferrer" href='https://github.com/AnujaLawankar' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="github" size='2x' />
                    </a>
                    <a rel="noreferrer" href='https://stackoverflow.com' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon="stack-overflow" size='2x' />
                    </a>
                </span>

            </div>
        </MDBFooter>
    );
};

export default Footer;