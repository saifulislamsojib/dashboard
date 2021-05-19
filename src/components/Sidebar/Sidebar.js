import { faBriefcase, faShieldAlt, faTh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    const [innerActive, setInnerActive] = useState('Access Control');

    return (
        <Navbar bg="light" expand="lg" className='sidebar d-lg-flex align-items-start'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column">
                <Nav.Link onClick={()=> setInnerActive('Projects')} as={Link} to='/projects' className={`mt-1 items ${innerActive==='Projects'?'sidebar-active':''} px-3`}>
                    <FontAwesomeIcon icon={faTh} />
                    <span className='ml-2'>Projects</span>
                </Nav.Link>
                <Nav.Link onClick={()=> setInnerActive('Organization Profile')} as={Link} to='/organization-profile' className={`mt-1 items ${innerActive==='Organization Profile'?'sidebar-active':''} px-3`}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span className='ml-2'>Organization Profile</span>
                </Nav.Link>
                <Nav.Link onClick={()=> setInnerActive('Access Control')} as={Link} to='/access-control' className={`mt-1 items ${innerActive==='Access Control'?'sidebar-active':''} px-3`}>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span className='ml-2'>Access Control</span>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Sidebar;