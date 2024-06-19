import React, { useEffect, useState } from 'react'
import { getfood, sqSetFreq } from '../Service/FoodItemService';
import { getCust } from '../Service/CustService';
import { addBill } from '../Service/BillRegService';
import { useNavigate } from 'react-router-dom';

const GenerateBill = () => {

  const navigator = useNavigate();
const [mode,setMode]= useState('');
const [AllFoodItem,setFoodItems]=useState([]);
const [custDetails,setCustDetails]=useState({});
var TotBill=0;

useEffect(()=>{
getfood().then((response)=>{
  setFoodItems(response.data);
  console.log(response.data);
})

getCust().then((response)=>{
  setCustDetails(response.data);
})
},[])

console.log(AllFoodItem);

const BillCount=(f,p)=>{
  TotBill+=f*p;
  return ;
}

const tableBody=(fooditem)=>{
if(fooditem.freq>0)
  return  <tr key={fooditem.id}>
      <td>{fooditem.id}</td>
      <td>{fooditem.name}</td>
      <td>{fooditem.price}</td>
      <td>{fooditem.freq}</td>
      <td>{(fooditem.freq)*(fooditem.price)}</td>
      {BillCount(fooditem.freq,fooditem.price)}
    </tr>
  else
  return ;
}


const AddBills=(e)=>{
  const cust_id=custDetails.id;
  const firstName=custDetails.firstName;
  const payMode=mode;
  const totCost=TotBill;
  const Bill={cust_id,firstName,payMode,totCost};
  console.log("Bill",Bill)
  addBill(Bill).then((response)=>{
    console.log(response.data);
  })
  sqSetFreq();

  navigator('/Success');

  
}

return (
  <div className='allPage'>
    <div className='card w-50 p-2 mx-auto '>
    <h2 className='text-center'>Your Bill</h2>
    <table className='table table-bordered  table-striped table-dark'>
      <tbody>
        <tr>
          <th className='headcust'>Customer id : </th>
          <td>{custDetails.id}</td>
        </tr>
        <tr>
          <th className='headcust'>Customer Name : </th>
          <td>{custDetails.firstName}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className='card w-50 p-2 mx-auto m-2'>
    
    <table className='table table-bordered  table-striped table-dark'>
      <thead>
        <tr>
          <th>Food id</th>
          <th>Food Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {
          AllFoodItem.map((fooditem) =>
            tableBody(fooditem)
          )
        }
      </tbody>
    </table>
  </div>
  <div className='card w-50 p-2 mx-auto m-2'>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Total Amount to pay : {TotBill}</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className='card w-50 p-2 mx-auto m-2'>
    <table className='table table-bordered  table-striped table-dark'>
      <tbody>
        <tr>
        <th className="headcust">
            Payment Mode
        </th>
        <td>
            {/* <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setCate(e.target.value)}/> */}
            <select className="form-select" aria-label="Default select example" onChange={(e) => setMode(e.target.value)}>
                <option selected>Select</option>
                <option >Offline</option>
                <option >Online</option>
            </select>
        </td>
        </tr>
        
          
      </tbody>
      
    </table>
    <button className='btn btn-primary mt-2 marbtn' onClick={(e)=>AddBills(e)}>Pay</button>
  </div>
  </div>
)
}

export default GenerateBill