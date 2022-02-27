import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ContextProvider } from '../../Context/Context';

const ReturnConfirm = () => {
   const { showReturnConfirm, handleReturnCloseConfirm, returnConfirm } = useContext(ContextProvider)

   return (
      <>
         <Modal show={showReturnConfirm} onHide={returnConfirm} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title>Return a product</Modal.Title>
            </Modal.Header>
            <Modal.Body>Return confirm</Modal.Body>
            <Modal.Footer>
               <Button variant="primary" onClick={handleReturnCloseConfirm}>
                  Confirm
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default ReturnConfirm;