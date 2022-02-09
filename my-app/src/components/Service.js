import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Service.css';

function Service(props){
    
    return (
        <Card onClick={() => props.onClick(props.service)} className="m-2">
            <Card.Body className="m-1">
                <Row className="mb-3" sm={4}>
                    <Col sm={3}>
                        <Image src={props.icon} rounded fluid></Image>
                    </Col>
                    <Col sm={10}></Col>
                </Row>
                <Row sm={8}>
                    <Col>
                        <Card.Title>{props.service}</Card.Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Text>{props.modes.join(', ')}</Card.Text>
                    </Col>
                </Row>    
            </Card.Body>
        </Card>
    );
}

export default Service;