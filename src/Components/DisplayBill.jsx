import React, { useEffect, useState } from 'react'
import { getAllBill } from '../Service/BillRegService';

const DisplayBill = () => {


    const [bills,SetAllBills]= useState([]);

    useEffect(()=>{
        getAllBill().then((response)=>{
            SetAllBills(response.data);
        })
    },[])
  return (
    <div className="allPage">

    
    <div className='card w-50 p-2 mx-auto'>
    <h2 className='text-center'>Bill Log Book</h2>
    <table className='table table-bordered table-striped table-dark' id='ttt'>
      <thead>
        <tr>
          <th>Bill id</th>
          <th>Customer id</th>
          <th>Customer Name</th>
          <th>Payment Mode</th>
          <th>Total Cost</th>
          <th>Totoal Gst</th>
        </tr>
      </thead>
      <tbody>
        {
          bills.map((bill) =>
            <tr key={bill.id}>
                {console.log(bill)}
              <td>{bill.id+2332}</td>
              <td>{bill.cust_id+10940}</td>
              <td>{bill.firstName}</td>
              <td>{bill.payMode}</td>
              <td>{bill.totCost}</td>
              <td>{bill.totGst}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div></div>
  )
}

export default DisplayBill