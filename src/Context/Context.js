import React, { createContext, useState } from 'react';

export const ContextProvider = createContext()

const Context = ({ children }) => {
   const [totalPrice, setTotalPrice] = useState()

   // Booking
   const [show, setShow] = useState(false);
   const [show2, setShow2] = useState(false);
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
   const handleCloseConfirm = () => setShow2(false);
   const bookConfirm = () => {
      setShow2(true)
      setShow(false)
   };
   // return
   const [showReturn, setShowReturn] = useState(false);
   const [showReturnConfirm, setShowReturnConfirm] = useState(false);
   const handleShowReturn = () => setShowReturn(true);
   const handleCloseReturn = () => setShowReturn(false);
   const handleReturnConfirm = () => {
      setShowReturnConfirm(true)
      setShowReturn(false)
      setTotalPrice(0)
   };
   const handleReturnCloseConfirm = () => setShowReturnConfirm(false);


   return (
      <ContextProvider.Provider value={{ handleShow, show, show2, handleClose, handleCloseConfirm, bookConfirm, showReturn, handleShowReturn, showReturnConfirm, handleReturnConfirm, handleCloseReturn, handleReturnCloseConfirm, totalPrice, setTotalPrice }}>
         {children}
      </ContextProvider.Provider>
   );
};

export default Context;