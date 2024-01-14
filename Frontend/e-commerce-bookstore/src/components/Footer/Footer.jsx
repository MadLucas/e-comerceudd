import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='bg-dark'>
            <footer className="py-3 my-4 bg-dark py-5 ">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-light">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Github</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Nosotros</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQs</a></li> 
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light ">Nosotros</a></li>
                </ul>
                <p className="text-center text-light">&copy; Marketplace ficticio con fines academicos 2024</p>
            </footer>
        </Container>
    );
}

export default Footer;
