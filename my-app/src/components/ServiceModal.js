import { Modal, Button, Form } from 'react-bootstrap';
import "./css/ServiceModal.css";

function ServiceModal(props) {

    return(
        <Modal show={props.show} onHide={props.handleClose} size="lg" fluid centered>
            <Modal.Header className="modal-header border-0" closeButton>
                <Modal.Title>{props.service}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control className="formControl" value={props.website} placeholder="Enter website" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className="formControl" value={props.desc} placeholder="Enter description" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="modal-footer border-0">
                <Button variant="outline-primary" className="button" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ServiceModal;