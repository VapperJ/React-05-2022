import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function NavigationBar() {

    const { t, i18n } = useTranslation();

    const onChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    }

    return(
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand as={Link} to=''><img src={require('../assets/webshop.png')} alt="" />Avaleht</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to='/ostukorv'>{t("navbar.cart-btn")}</Nav.Link>
                <Nav.Link as={Link} to='/admin'>{t("navbar.admin-btn")}</Nav.Link>
                <Nav.Link as={Link} to='/poed'>Poed</Nav.Link>
                <img className="lang" onClick={()=> onChangeLanguage('est')} src={require('../assets/estonia.png')} alt="" />
                <img className="lang" onClick={()=> onChangeLanguage('usa')} src={require('../assets/usa.png')} alt="" />
                <img className="lang" onClick={()=> onChangeLanguage('rus')} src={require('../assets/russia.png')} alt="" />
            </Nav>
         </Container>
    </Navbar>
    )
}

export default NavigationBar;