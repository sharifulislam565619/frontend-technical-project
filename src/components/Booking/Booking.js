import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Select from 'react-select';
import { ContextProvider } from "../../Context/Context";

const Booking = () => {
   const { show, handleClose, bookConfirm, setTotalPrice } = useContext(ContextProvider)

   const [price, setPrice] = useState(0)
   const [fromDate, setFromDate] = useState()
   const [toDate, setToDate] = useState()
   const [day, setDay] = useState(1)
   const handleFromDate = (e) => {
      setFromDate(e.target.value)
   }
   const handleToDate = (e) => {
      setToDate(e.target.value);
   }
   const handlePrice = (e) => {
      setPrice(e.value)

   }

   const handleDay = (toDate, fromDate) => {
      const date1 = new Date(toDate);
      const date2 = new Date(fromDate);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffDays);
      setDay(diffDays)
   }
   const handleTotalPrice = (price, day) => {
      setTotalPrice(price * day)
   }


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

      <>
         <Modal show={show} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title>Book a product</Modal.Title>
            </Modal.Header>
            <Modal.Body>

               <Select onChange={handlePrice} defaultValue={options?.[0]} className="mb-3" options={options} />

               <div className="">
                  <small className="d-flex">
                     <span className="px-2">From</span><input onChange={handleFromDate} type="date" />
                     <span className="px-2" >To</span><input onChange={handleToDate} type="date" />
                  </small>
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  No
               </Button>
               <Button variant="primary" onClick={() => { bookConfirm(); handleTotalPrice(price, day); handleDay(toDate, fromDate) }}>
                  Yes
               </Button>
            </Modal.Footer>
         </Modal>

      </>

   );
};

export default Booking;


