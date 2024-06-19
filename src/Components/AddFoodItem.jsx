import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addFood, getByIdUpd, updateFood } from '../Service/FoodItemService';
import { getCat } from '../Service/CatService';

const AddFoodItem = () => {

    const abcd = useParams();
    const navigator = useNavigate();
    // const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [cate, setCate] = useState('');
    const [price, setPrice] = useState(0);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        
        getCat().then((response) => {
            setCats(response.data);
        })
        if(abcd.id&&(!isNaN(abcd.id)))
            {
                getByIdUpd(abcd.id).then((response)=>{
                    setName(response.data.name)
                    setCate(response.data.cate)
                    setPrice(response.data.price)
                })
            }
    }, [])

    console.log(abcd.id,(isNaN((abcd.id))));
    
    const AddFo = (e) => {
        e.preventDefault();
        const id=0;
        const food = {name, cate, price };
        console.log(food);
        //if there is a id======>
        if(abcd.id)
        {
             if(isNaN(abcd.id))
             {
                food.cate=abcd.id;
                addFood(food).then((response) => {
                    navigator(`/cat-food-items/${abcd.id}`)
                })
                  
             }
             else
             {
                updateFood(food,abcd.id).then((response)=>{
                    navigator('/all-food-items')
                })
             }
        }
        else
        {
            addFood(food).then((response) => {
                navigator('/all-food-items')
            })
        }
    }
    // const givId = () => {
    //     if(!abcd.id||isNaN(abcd.id))
    //         return <div className="row g-3 align-items-center mt-2">
    //             <div className="col-auto">
    //                 <label className="col-form-label">Food Id</label>
    //             </div>
    //             <div className="col-auto ">
    //                 <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e) => setId(e.target.value)} />
    //             </div>
    //         </div>
    //     else
    //     return <div></div>
    // }
    console.log(abcd.id);

    const makeDefault=(cat)=>{
        if(cat.name==cate)
            return <option key={cat.id} selected>{cat.name}</option>
        else
        return <option key={cat.id} >{cat.name}</option>
    }


    const selectCat=()=>{
        console.log(abcd.id,(abcd.id&&isNaN(abcd.id)));
    if(abcd.id&&isNaN(abcd.id))
    return <div></div>
    else
    return <div className="row g-3 align-items-center mt-2">
        <div className="col-auto">
            <label className="col-form-label">Food Category</label>
        </div>
        <div className="col-auto">
            {/* <input type="text" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setCate(e.target.value)}/> */}
            <select className="form-select" aria-label="Default select example" onChange={(e) => setCate(e.target.value)}>
                <option>Select</option>
                {
                    cats.map((cat) =>
                        makeDefault(cat)
                    )
                }
            </select>
        </div>
    </div>
    }



    const addHeader=()=>{
        if(abcd.id&&(!isNaN(abcd.id)))
            return <h4 className='text-center'>Update Food Item</h4>
        else
        return <h4 className='text-center'>Add Food Item</h4>
    }

    const lastbtn=()=>{
        if(abcd.id&&(!isNaN(abcd.id)))
        return <button className='btn btn-primary mt-4 ' onClick={(e) => AddFo(e)}>Update</button>
        else
        return <button className='btn btn-primary mt-4 ' onClick={(e) => AddFo(e)}>Add</button>
    }
    return (
        <div className='allPage'>
            <div className='card w-25 mx-auto'>
                <div className='card-body'>
                    <form className='form'>
                        {addHeader()}
                        {/* <div>{givId()}</div> */}
                        <div className="row g-3 align-items-center mt-2">
                            <div className="col-auto">
                                <label className="col-form-label">Food Name</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" aria-describedby="passwordHelpInline" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        {selectCat()}
                        <div className="row g-3 align-items-center mt-2">
                            <div className="col-auto">
                                <label className="col-form-label">Food Price</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" aria-describedby="passwordHelpInline" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className='text-center'>
                            {lastbtn()}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddFoodItem