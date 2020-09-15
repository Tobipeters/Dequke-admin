import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProfileModal = (props) => {
    console.log(props)
    const {
        buttonLabel,
        className,
        toggle,
        modalHeader,
        modalBody,
    } = props;

    // const [modal, setModal] = useState(false);
    // const [nestedModal, setNestedModal] = useState(false);
    // const [closeAll, setCloseAll] = useState(false);

    // const toggle = () => setModal(!modal);
    // const toggleNested = () => {
    //     setNestedModal(!nestedModal);
    //     setCloseAll(false);
    // }
    // const toggleAll = () => {
    //     setNestedModal(!nestedModal);
    //     setCloseAll(true);
    // }

    return (
        <div>

            <Modal
                isOpen={props.modal}
                toggle={props.toggle}
                className={props.className}
            >
                <ModalHeader toggle={props.toggle}> {props.modalHeader} </ModalHeader>

                <ModalBody>
                    {props.modalBody}
                    <br />
                    <Button color="success" onClick={props.toggleNested}>Show Nested Modal</Button>

                    {/* Nested Modal */}
                    <Modal isOpen={props.nestedModal} toggle={props.toggleNested}>
                        <ModalHeader> {props.nestedModalHeader} </ModalHeader>
                        <ModalBody> {props.nestedModalBody} </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={props.toggleNested}>Done</Button>{' '}
                            <Button color="secondary" onClick={props.toggleAll}>All Done</Button>
                        </ModalFooter>
                    </Modal>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ProfileModal;