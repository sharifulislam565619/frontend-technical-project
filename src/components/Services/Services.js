import React, { useContext, useEffect, useState } from 'react';
import { ContextProvider } from '../../Context/Context';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

   const { handleShow, handleShowReturn } = useContext(ContextProvider)
   const [services, setServices] = useState([])
   const [searchResult, setSearchResult] = useState([])
   useEffect(() => {
      fetch('/datas.json')
         .then(res => res.json())
         .then(data => setServices(data))
   }, [])

   const filterData = (e) => {
      const key = e.target.value
      const filtered = services.filter(service => service.name.toLowerCase().includes(key.toLowerCase()))
      setSearchResult(filtered)
   }


   return (
      <>
         <div className='p-4 '>
            <div className="input-group mb-3 search-input ms-auto">
               <input type="text" className="form-control" placeholder="search by name" aria-label="Recipient's username" aria-describedby="basic-addon2"
                  onChange={filterData}
               />
            </div>
            <table className="table table-Light table-responsive  table-bordered border-dark border-bottom-5 table-striped">
               <thead >
                  <tr className='table-dark head-row'>
                     <th scope="col">#</th>
                     <th scope="col">name</th>
                     <th scope="col">code</th>
                     <th scope="col">type</th>
                     <th scope="col">availability</th>
                     <th scope="col">needing_repair</th>
                     <th scope="col">durability</th>
                     <th scope="col">max_durability</th>
                     <th scope="col">mileage</th>
                     <th scope="col">price</th>
                     <th scope="col">min_rent_pe</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     searchResult?.length > 0 ? searchResult.map((service, index) => <Service
                        key={service?.code}
                        index={index}
                        service={service}>
                     </Service>) :
                        services.map((service, index) => <Service
                           key={service?.code}
                           index={index}
                           service={service}>
                        </Service>)
                  }
               </tbody>
            </table>
            <div className='text-end'>
               <button className='btn btn-outline-dark mx-3' onClick={handleShow} >Book</button>
               <button className='btn btn-outline-dark' onClick={handleShowReturn} >Return</button>
            </div>



         </div>
      </>



   );
};

export default Services;