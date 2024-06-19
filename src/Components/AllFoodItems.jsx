import React, { useEffect, useState } from 'react'
import { deleteFood, getById, getfood, updateFood, updatefreq } from '../Service/FoodItemService';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const AllFoodItems = () => {

  const location = useLocation();
  const navigator = useNavigate();
  var [AllFoodItem, setFoodItems] = useState([]);
  const PPP = useParams();

console.log(location,PPP);




  useEffect(() => {
    if (location.pathname == '/all-food-items' || location.pathname == `/all-food-items/C`) {
      ggetall();
    }
    else {
      ggetbycat();
    }
  }, [])


  const ggetbycat=()=>{
    getById(PPP.id).then((response) => {
      setFoodItems(response.data);
    })
  }


  const ggetall=()=>{
    getfood().then((response) => {
      setFoodItems(response.data);
    })
  }


   const freqIncrement = (food_id) => {
    food_id.freq=food_id.freq+1;
    updateFood(food_id,food_id.id).then((response) => {
      if(location.pathname == '/all-food-items/C')
      ggetall();
      else
      ggetbycat();
    });
    
  }

  const freqDecrement = (food_id) => {
    if(food_id.freq>0)
    {food_id.freq=food_id.freq-1;
    updateFood(food_id,food_id.id).then((response) => {
      console.log("hello");
      if(location.pathname == '/all-food-items/C')
        ggetall();
        else
        ggetbycat();
    });}
    
  }







  const addFoodI = () => {
    navigator('/AddFoodItem');
  }

  const addFoodIc = () => {
    navigator(`/AddFoodItem/${PPP.id}`);
  }

  const upbtn = (id) => {
    navigator(`/AddFoodItemss/${id}`);
  }

  const debtn = (ide) => {
    console.log(ide);
    deleteFood(ide).then((response) => {
      console.log("s");
    })
    getfood().then((response) => {
      setFoodItems(response.data);
      console.log("ALL");
    })
    window.location.reload();
  }

  const nxtcolhead = () => {
    return <th className='text-center'>Actions</th>
  }






  const nxtcol = (fooditem) => {
    if (location.pathname == '/all-food-items/C' || location.pathname == `/cat-food-items/${PPP.id}/C`)
      return <td><div className='input-group'>
        <button type='button' className='input-group-text' onClick={(e)=>freqIncrement(fooditem)}>+</button>
        {console.log(fooditem)}
        <div className='form-control text-center' value={fooditem.freq}>{fooditem.freq}</div>
        <button type='button' className='input-group-text' onClick={(e)=>freqDecrement(fooditem)}>-</button>
      </div></td>;
    else
      return <td className='text-center'>
        <button className='btn btn-primary btn-sm m-2' onClick={(e) => upbtn(fooditem.id)}>Update</button>
        <button className='btn btn-danger btn-sm m-2' onClick={(e) => debtn(fooditem.id)}>Delete</button>
      </td>
  }

  const AddBtn = () => {
    if (location.pathname == '/all-food-items/C' || location.pathname == `/cat-food-items/${PPP.id}/C`)
      return;
    else {
      if (!PPP.id)
        return <button className='btn btn-primary m-2 wwww' onClick={addFoodI}>Add Food Item</button>;
      else
        return <button className='btn btn-primary m-2 wwww' onClick={addFoodIc}>Add Food Item</button>;
    }
  }

   const genBill=()=>{
    navigator('/Cust-Info');
   }


   const addGenBillBtn=()=>{
    if(location.pathname == '/all-food-items/C' || location.pathname == `/cat-food-items/${PPP.id}/C`)
      return <button className='btn btn-primary' onClick={(e)=>genBill()}>Generate Bill </button>;
    else
    return ;
   }

   const backToMenu=(e)=>{
    navigator('/Menu')
   }
   const Genback=()=>{

    if(location.pathname==`/cat-food-items/${PPP.id}`)
      return <button className='btn btn-primary' onClick={(e)=>backToMenu(e)}>Back to Menu</button>
    else
    return ;
   }

  return (
    <div className="allPage">

    
    <div className='card w-50 p-2 mx-auto '>
      <h2 className='text-center'>All food Items</h2>
      {AddBtn()}
      <table className='table table-bordered  table-striped table-dark'>
        <thead>
          <tr>
            <th>Food id</th>
            <th>Food Name</th>
            <th>Food Category</th>
            <th>Price</th>
            {nxtcolhead()}
          </tr>
        </thead>
        <tbody>
          {
            AllFoodItem.map((fooditem) =>
              <tr key={fooditem.id}>
                <td>{fooditem.id}</td>
                <td>{fooditem.name}</td>
                <td>{fooditem.cate}</td>
                <td>{fooditem.price}</td>
                {nxtcol(fooditem)}
              </tr>
            )
          }
        </tbody>
      </table>
      {Genback()}
      {addGenBillBtn()}
    </div></div>
  )
}

export default AllFoodItems