import React from 'react'

const FeedBack = () => {
  return (
    <div className='allPage about-top feedBtn'>
        <h1 >Send FeedBack</h1>
        <textarea type="text" className='text-box-feedback' placeholder="write your FeedBack" />
        <button className='btn btn-primary '>Submit</button>
    </div>
  )
}

export default FeedBack