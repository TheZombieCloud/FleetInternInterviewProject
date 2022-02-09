import { Form, FormControl, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Service from '../components/Service';
import ServiceModal from '../components/ServiceModal';
import './css/Main.css';

function Main() {
    const [services, setServices] = useState({}); 
    const [show, setShow] = useState(false);
    const [service, setService] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getServices();
    }, []);
    
    function getServices() {
        axios.get('http://localhost:8000/services/')
            .then((res) => {
                let services = {};
                
                res.data.forEach(obj => {
                    if (obj.name in services){
                        services[obj.name].modes.push(obj.modeType);
                    }
                    else {
                        services[obj.name] = {
                            modes: [obj.modeType],
                            icon: obj.icon,
                            website: obj.website,
                            desc: obj.description,
                        }
                    }
                });
            
                setServices(services);
            })
            .catch((err) => {
                return err;
            })
    }

    function createRows() {
        let cols = []

        for (const [key, val] of Object.entries(services)) {
            if (key.toUpperCase().includes(searchQuery) || val.modes.findIndex(elem => elem.toUpperCase().includes(searchQuery)) !== -1){
                cols.push(
                    <Col sm={4} className="p-0">
                        <Service onClick={handleOpen} service={key} icon={val.icon} modes={val.modes}/>
                    </Col>
                );
            }
        }
        for (let i = 0;i<3 - cols.length%3;i++){
            cols.push(<Col sm={4} className="p-0"></Col>);
        }

        let rows = []

        for (let i = 0;i<cols.length;i+=3){
            rows.push(
                <Row>
                    {cols[i]}
                    {cols[i+1]}
                    {cols[i+2]}     
                </Row>
            );
        }

        return rows;
    }

    function handleOpen(service) {
        setService(service);
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    function searchChange(searchQuery) {
        setSearchQuery(searchQuery.toUpperCase());
    }

    return (
        <div>
            <Container className="mt-4">
                <h1 className="display-6">Available Services</h1>
                <Form className="d-flex">
                    <InputGroup className="mb-3">
                        <FormControl
                            type="search"
                            placeholder="Search for a specific service"
                            className="searchBar"
                            onChange={(e) => searchChange(e.target.value)}
                        />
                        <InputGroup.Text>
                            <Search/>
                        </InputGroup.Text>
                    </InputGroup>
                </Form>
                <Container className="p-0">
                    {createRows()}
                </Container>
            </Container>
            <ServiceModal show={show} service={service} website={services[service]?.website} desc={services[service]?.desc} handleClose={handleClose}></ServiceModal>
        </div>
    );
}

export default Main;