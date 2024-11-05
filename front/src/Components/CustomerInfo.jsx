import React, { useState } from 'react'
import { addCust } from '../Service/CustService';
import { useNavigate } from 'react-router-dom';

const CustomerInfo = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [emailId,setEmailId]=useState('');
    const [phoneNo,setPhoneNo]=useState('');
    const navigator=useNavigate();
    const AddCustum=(e)=>{
        e.preventDefault();
        const email=emailId;
       const Cust={firstName,lastName,email,phoneNo};
       addCust(Cust).then((response)=>{
        console.log(response.data)
        navigator('/gen-bill')
       })
    }
    return (
      <div className="allPage">

      
      <div className='card w-25 mx-auto'>
          <div className='card-body'>
            <form className='form'>
              <h4 className='text-center'>Customer Info</h4>
  
              <div className="row g-3 align-items-center mt-2">
                <div className="col-auto">
                  <label className="col-form-label">First Name</label>
                </div>
                <div className="col-auto">
                  <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
              </div>
  
              <div className="row g-3 align-items-center mt-2">
                <div className="col-auto">
                  <label className="col-form-label">Last Name</label>
                </div>
                <div className="col-auto">
                  <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
              </div>
  
              <div className="row g-3 align-items-center mt-2">
                <div className="col-auto">
                  <label className="col-form-label">Email Id</label>
                </div>
                <div className="col-auto">
                  <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setEmailId(e.target.value)}/>
                </div>
              </div>
  
              <div className="row g-3 align-items-center mt-2">
                <div className="col-auto">
                  <label className="col-form-label">Phone No</label>
                </div>
                <div className="col-auto">
                  <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setPhoneNo(e.target.value)}/>
                </div>
              </div>
              <div className='text-center'>
              <button className='btn btn-primary mt-4 ' onClick={(e)=>AddCustum(e)}>Proceed</button>
              </div>
              
            </form>
          </div>
        </div></div>
    )
  }

export default CustomerInfo