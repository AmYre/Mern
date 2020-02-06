import React, {useState, useContext} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Container} from 'reactstrap';
import { GlobalContext } from "../context/GlobalContext";
import {useSelector} from 'react-redux';


const MyNavbar = props => {
    const [expandMenu, setExpandMenu] = useState(false);
    const [services] = useContext(GlobalContext);
    const movies = useSelector(state => state)

    const toggle = () => {
        setExpandMenu(!expandMenu);
    }

    return (
		<div>
			<Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/"> DEVolution {services.length}-{movies.length} </NavbarBrand>
                    <NavbarText>Dev Love Evolution</NavbarText>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={expandMenu} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Pricing
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    About
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
			</Navbar>
		</div>
	);

}

export default MyNavbar;