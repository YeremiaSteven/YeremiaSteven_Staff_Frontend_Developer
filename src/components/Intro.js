import {Col, Container, Button, Row} from "react-bootstrap"

const Intro = () =>{
return(
<div className="intro">
    <Container className="text-white text-center d-flex justify-content-center
    align-items-center ">
      <Row>
        <Col>
        <div className="title">NONTON MURAH</div>
        <div className="title">HANYA DISINI</div>
        <div className="IntroButton mt-4 text-center">
            <Button variant="dark">LIHAT SEMUA LIST</Button>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
)
    
}

export default Intro