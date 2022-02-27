import React from 'react';
import './Service.css';

const Service = ({ service, index }) => {

   const { name, code, type, needing_repair, max_durability, mileage, availability, durability, price, minimum_rent_period } = service

   return (

      <tr className="body-row">
         <td scope='row'>{index + 1}</td>
         <td>{name}</td>
         <td>{code}</td>
         <td>{type}</td>
         <td>{String(availability)}</td>
         <td>{String(needing_repair)}</td>
         <td>{durability}</td>
         <td>{max_durability}</td>
         <td>{mileage}</td>
         <td>{price}</td>
         <td>{minimum_rent_period}</td>
      </tr>
   );
};

export default Service;