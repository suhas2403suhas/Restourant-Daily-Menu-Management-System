import React, { useEffect, useState } from 'react'
import { getCat } from '../Service/CatService';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getById } from '../Service/FoodItemService';

const MenuComponent = () => {

  const[cat,SetCat]=useState([]);
  useEffect(()=>{
    getCat().then((response)=>{
      SetCat(response.data);
      console.log(response.data);
    })
  },[])
  

  const location =useLocation();
  console.log(window.location.href);
  console.log(window.location.pathname);
  const naviagtor=useNavigate();
  const p=useParams();
  console.log(p);

  const setbtn=()=>{
    if(location.pathname=='/CMenu')
      return ;
    else
     return <button className="btn btn-primary mb-2 wwww" onClick={(e)=>addCate()}>Add Catagory</button>;
  }
  const addCate=()=>{
    naviagtor('/add-Cat');
  }

  const viewAll=(e)=>{
    if(location.pathname=='/Menu')
    naviagtor('/all-food-items');
  else
   naviagtor('/all-food-items/C');
  }

  const viewByCat=(st)=>{
    if(location.pathname=='/Menu')
      naviagtor(`/cat-food-items/${st}`);
    else
      naviagtor(`/cat-food-items/${st}/C`);
  }
  return (
    <div className="allPage">

    
    <div className='card w-50 mx-auto cardMenu p-2'>
      
      <h1 className='text-center mt-2 mb-3'>Food Category</h1>
      {setbtn()}
    
      <div >
      <table className='table table-bordered mx-auto tablemenu  table-striped table-dark'>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Categery Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            cat.map((ca)=>
            <tr key={ca.id}>
              <td>{ca.id}</td>
              <td>{ca.name}</td>
              <td><button className="btn btn-primary" onClick={(e)=>viewByCat(ca.name)}>View</button></td>
            </tr>
          )
          }
        </tbody>
      </table></div>
      <div className='text-center'>
      <button className="btn btn-primary text-center mb-2" onClick={(e)=>viewAll(e)}>View All</button>
      </div>
      
    </div></div>
  )
}

export default MenuComponent