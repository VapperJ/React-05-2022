import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';

function RibaMenu() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to=''>Avaleht</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/tegelased'>Tegelased</Nav.Link>
                    <Nav.Link as={Link} to='/andmed'>Info</Nav.Link>
                    <Nav.Link as={Link} to='/andmeteLisamine'>Info lisamine</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}


export default RibaMenu;
