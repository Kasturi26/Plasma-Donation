import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospitalUser, faHome, faList, faUserPlus, faSignInAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class NavBarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/home"> <FontAwesomeIcon icon={faHospitalUser} color="red" />  COVID-19 Plasma Donor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  as={Link}  to="/home"> <FontAwesomeIcon icon={faHome} color="blue" /> Home</Nav.Link>
                        <Nav.Link  as={Link}  to="/register"><FontAwesomeIcon icon={faUserPlus} color="blue" /> Patient Register </Nav.Link>
                        <Nav.Link  as={Link} to="/PatientList"><FontAwesomeIcon icon={faList} color="blue" />  Patient List </Nav.Link>
                        <Nav.Link  as={Link} to="/PatientDetails/:id"><FontAwesomeIcon icon={faInfoCircle} color="blue" />  Patient Details  </Nav.Link>
                        {
                            localStorage.getItem('login') ?
                            <Nav.Link  as={Link}  to="/Logout"><FontAwesomeIcon icon={faSignInAlt} color="blue" />  Logout</Nav.Link>
                            :
                            <Nav.Link  as={Link}  to="/SignUp"><FontAwesomeIcon icon={faSignInAlt} color="blue" />  Login</Nav.Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavBarMenu;
