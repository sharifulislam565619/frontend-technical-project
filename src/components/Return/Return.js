import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import { ContextProvider } from '../../Context/Context';

const Return = () => {
   const { showReturn, handleCloseReturn, handleReturnConfirm } = useContext(ContextProvider)

   const options = [
      { value: 4500, label: 'Air Compressor 12 GAS / p1' },
      { value: 6500, label: 'Air Compressor 5 Electric / p2' },
      { value: 3000, label: 'Dia Blade 14 inch / p3' },
      { value: 200, label: 'Copper Blade 5 inch / p4' },
      { value: 200, label: 'Copper Blade 5 inch / p5' },
      { value: 300, label: 'Copper Blade 8 inch / p6' },
      { value: 800, label: 'Beam Clamp / p7' },
      { value: 800, label: 'Beam Clamp / p8' },
      { value: 800, label: 'Beam Clamp / p9' },
      { value: 1000, label: 'Boom lift 40 / m1' },
      { value: 1500, label: 'Boom lift 60 / m2' },
      { value: 2000, label: 'Boom lift 80 / m3' },
      { value: 2500, label: 'Boom lift 100 /m4' },
      { value: 500, label: 'Boom lift 20 / m5' },
      { value: 500, label: 'Boom lift 20 /m6' },
      { value: 500, label: 'Boom lift 20 / m7' },
      { value: 1000, label: 'Boom lift 40 / m8' }
   ]

   return (
      <div>
         <Modal show={showReturn} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title>Return a product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Select defaultValue={options?.[0]} className="mb-3" options={options} />
               <div>
                  <input className='px-2' placeholder='Used mileage' type="number" name="" id="" />
               </div>
            </Modal.Body>
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