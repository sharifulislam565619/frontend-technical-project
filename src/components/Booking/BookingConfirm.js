import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ContextProvider } from '../../Context/Context';

const BookingConfirm = () => {
   const { show2, handleCloseConfirm, bookConfirm, totalPrice } = useContext(ContextProvider)
   return (
      <>
         <Modal show={show2} onHide={bookConfirm} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title>Book a product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Your estimate price is ${totalPrice} <br />
               Do you want to procedure?
            </Modal.Body>
            <Modal.Footer>
               <Button variant="primary" onClick={handleCloseConfirm}>
                  Confirm
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default BookingConfirm;