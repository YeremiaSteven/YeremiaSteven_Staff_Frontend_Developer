import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">LuskyFilms</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">PLAYING</Nav.Link>
                <Nav.Link href="#popular">POPULAR</Nav.Link>
                <Nav.Link href="#login">LOGIN</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar