import { faBell, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import user from '../../images/user.svg';
import './Header.css';

const Header = () => {
    return (
        <Container className="sticky-top" fluid>
            <Navbar>
                <Navbar.Brand as={Link} to='/' className='navbar-heading d-flex align-items-center'>
                    <img className='mr-2' src={logo} alt="" />
                    <span>MYSITE</span>
                </Navbar.Brand>
                <div className="ml-auto d-flex align-items-center">
                    <img className='mr-2' src={user} alt="" />
                    <h6 className='mt-1 mr-3'>Kishore</h6>
                    <FontAwesomeIcon icon={faBell} className='icon mr-2' />
                    <FontAwesomeIcon icon={faQuestionCircle} className='icon' />
                </div>
            </Navbar>
        </Container>
    );
};

export default Header;