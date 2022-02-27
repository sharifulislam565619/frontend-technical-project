import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ContextProvider } from '../../Context/Context';

const Return = () => {
   const { showReturn, handleCloseReturn, handleReturnConfirm } = useContext(ContextProvider)

   return (
      <div>
         <Modal show={showReturn} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title>Return a product</Modal.Title>
            </Modal.Header>
            <Modal.Body>Return rent</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleCloseReturn}>
                  No
               </Button>
               <Button variant="primary" onClick={handleReturnConfirm}>
                  Yes
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default Return;