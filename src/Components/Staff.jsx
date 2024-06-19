import React from 'react'
import { useNavigate } from 'react-router-dom'

const Staff = () => {

    const navigator=useNavigate();
    const logBook=(e)=>{
        navigator('/view-bill')
    }

    const Staff=(e)=>{
       navigator('/staff-login')
    }
  return (
    <div className='allPage'>
      <h1 className='text-center main-heading'>Restorant Daily Menu Management System</h1>
      <div class="btnclass">
        <div class="image-container">
          <img src="image.png" class="plate" onClick={(e) => logBook(e)} />
          <p class="image-text1" onClick={(e) => logBook(e)}>View</p>
          <p class="image-text1-1" onClick={(e) => logBook(e)}>Log Book</p>
        </div>

        <div class="image-container">
          <img src="image.png" class="plate" onClick={(e)=> Staff(e)} />
          <p class="image-text2" onClick={(e)=> Staff(e)} >Commit</p>
          <p class="image-text2-1" onClick={(e)=> Staff(e)} >Changes</p>
        </div>
      </div>
      {/* <button className='sitebutton' onClick={(e)=> movToLogin()}>Staff Login</button>
        <button className='sitebutton' onClick={(e)=> movToMenu(e)}>Customer</button> */}
      {/* </div> */}
    </div>



    // <div className="allPage">

    
    // <div className='btnclass'>
    //     <button className='sitebutton' onClick={(e)=>logBook(e)}>View Log Book</button>
    //     <button className='sitebutton' onClick={(e)=>Staff(e)}>Commit Changes</button>
    // </div>
    // </div>
  )
}

export default Staff