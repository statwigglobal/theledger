import React, {useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../../assets/img/nav-logo.png";
import VaccineLegderLogo from "../../assets/img/VACCINELEDGER.png";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import {useKeycloak} from "@react-keycloak/web";
import {getUserNumberFromRecipientToken} from "../../utils/reciepientAuth";
import {removeCookie, setCookie} from "../../utils/cookies";
import {CITIZEN_TOKEN_COOKIE_NAME} from "../../constants";

function Header() {
    const {initialized, keycloak} = useKeycloak();
    const [reciepientUser, setReciepientUser] = useState('');

    useEffect(() => {
        const rUser = getUserNumberFromRecipientToken();
        setReciepientUser(rUser);
    }, []);
    
    function logoutRecipient() {
        removeCookie(CITIZEN_TOKEN_COOKIE_NAME);
        window.location.href = "/"
    }

    function onLogoutClicked() {
        if (reciepientUser) {
            logoutRecipient()
        }
        if (keycloak.authenticated) {
            keycloak.logout({redirectUri: window.location.origin})
        }
    }
    return(
        <Navbar fixed="top" bg="white">
            <Navbar.Brand href={"/"}>
                <img
                    src={NavbarLogo}
                    height="30"
                    className="divoc-logo"
                    alt="Divoc logo"
                />
                <img
                    src={VaccineLegderLogo}
                    height="20"
                    className="vl-logo"
                    alt="VL logo"
                />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="">
                    {/*<Nav.Link href="/">HOME</Nav.Link>*/}
                    {/*<NavDropdown title="ENG" id="basic-nav-dropdown">*/}
                    {/*    <NavDropdown.Item href="#action/3.1">ENG</NavDropdown.Item>*/}
                    {/*</NavDropdown>*/}
                    {(keycloak.authenticated || reciepientUser) && <Nav.Link onClick={onLogoutClicked}>LOGOUT</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
