import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-start">
                    <Link to="/react2-01-happy-cake" className="text-white ms-3 text-decoration-none">
                        <i className="fa-solid fa-house me-2"></i> Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        <i className="fa-sharp fa-solid fa-file-signature me-2"></i>Contacto
                    </Link>
                </Container>
                <Navbar.Brand className="me-5">                    
                    <Link to="/react2-01-happy-cake" className="text-white ms-3 text-decoration-none">
                    <i className="fa-solid fa-cake-candles"></i><span className="ms-2">Torta Feliz</span> 
                    </Link>
                </Navbar.Brand>
            </Navbar>
        </>
    );
}
