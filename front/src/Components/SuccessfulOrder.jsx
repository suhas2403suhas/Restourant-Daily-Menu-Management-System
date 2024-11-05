import React from 'react'
import { useNavigate } from 'react-router-dom'

const SuccessfulOrder = () => {
    const navigator =useNavigate();

    const Tomain=(e)=>{
      navigator('/');
    }
  return (
    <div className='allPage success'>
        <h1>Order Successfull</h1>
        <h1>Thank You!!!!!!!!!</h1>
        <button className='btn btn-primary' onClick={(e)=>Tomain(e)}>Order Again</button>
    </div>
  )
}

export default SuccessfulOrder