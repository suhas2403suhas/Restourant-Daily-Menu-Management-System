import React, { useState } from 'react'
import { addCat } from '../Service/CatService';
import { useNavigate } from 'react-router-dom';

const AddCat = () => {

    const [id,setId]=useState(0);
    const [name,setName]=useState('');
    const navigator=useNavigate();
    const AddCa=(e)=>{
        e.preventDefault();
        const Cat={name};
        addCat(Cat).then((response)=>{
            console.log(response.data);
            navigator('/Menu')
        })
    }
  return (
    <div className='allPage'>
        <div className='card w-25 mx-auto'>
        <div className='card-body'>
          <form className='form'>
            <h4 className='text-center'>Add Category</h4>
            {/* <div className="row g-3 align-items-center mt-2">
              <div className="col-auto">
                <label className="col-form-label">Category Id</label>
              </div>
              <div className="col-auto ">
                <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setId(e.target.value)}/>
              </div>
            </div> */}
            <div className="row g-3 align-items-center mt-2">
              <div className="col-auto">
                <label className="col-form-label">Category Name</label>
              </div>
              <div className="col-auto">
                <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setName(e.target.value)}/>
              </div>
            </div>
            <div className='text-center'>
            <button className='btn btn-primary mt-4 ' onClick={(e)=>AddCa(e)}>Add</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCat