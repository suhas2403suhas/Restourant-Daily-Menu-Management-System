import React, { useEffect, useState } from 'react'
import { getDetails, staffDetails } from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const StaffLogin = () => {

  const [pstaffId,psetStaffId]=useState(0);
  const [pfirstName,psetFirstName]=useState('');
  const [plastName,psetLastName]=useState('');

  useEffect(()=>{
    getDetails().then((response)=>{
      psetStaffId(response.data.staffId);
      psetFirstName(response.data.firstName);
      psetLastName(response.data.lastName)
    });
  },[])

  
  const [staffId,setStaffId]=useState(0);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  

  const navigator=useNavigate();


const getStaffs=(e)=>{
  e.preventDefault();
  const staff={staffId,firstName,lastName};
  console.log(staff);
  staffDetails(staff).then((response)=>{
    console.log(response.data);
    navigator('/Menu');
  })
}

  return (
    <div className='allPage'>
      <div className='card w-25 mx-auto'>
        <div className='card-body'>
          <form className='form'>
            <h4 className='text-center'>Add Details</h4>
            <div className="row g-3 align-items-center mt-2">
              <div className="col-auto">
                <label className="col-form-label">Staff Id</label>
              </div>
              <div className="col-auto ">
                <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setStaffId(e.target.value)}/>
              </div>
            </div>
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
            <div className='text-center'>
            <button className='btn btn-primary mt-4 ' onClick={getStaffs}>Click here to do changes in menu</button>
            </div>
            
          </form>
        </div>
      </div>

      <div className='card mt-5 w-25 mx-auto'>
        <div className='card-body'>
          <form className='form'>
            <h4 className='text-center'>Last Modified By</h4>

            <div className="row g-3 align-items-center mt-2">
              <div className="col-auto">
                <label className="col-form-label">Modifier Staff id:{pstaffId}</label>
              </div>
            </div>


            <div className="row g-3 align-items-center mt-2">
              <div className="col-auto">
                <label className="col-form-label">Modifier First Name:{pfirstName}</label>
              </div>
            </div>

            <div className="row g-3 align-items-center mt-2">
              <div className="col-auto">
                <label className="col-form-label">Modifier Last Name:{plastName}</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StaffLogin