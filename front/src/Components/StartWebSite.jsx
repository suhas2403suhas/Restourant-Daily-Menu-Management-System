import React from 'react'
import { useNavigate } from 'react-router-dom'


const StartWebSite = () => {
  const navigator = useNavigate('');
  const movToLogin = () => {
    console.log('hello');
    navigator('/Staff');
  }


  const movToMenu = (e) => {
    navigator('/CMenu');
  }
  return (
    <div className='allPage'>
      <h1 className='text-center main-heading'>Restorant Daily Menu Management System</h1>
      <div className="btnclass">
        <div className="image-container">
          <img src="image.png" className="plate" onClick={(e) => movToLogin()} />
          <p className="image-text1" onClick={(e) => movToLogin()}>Staff</p>
          <p className="image-text1-1" onClick={(e) => movToLogin()}>Login</p>
        </div>

        <div className="image-container">
          <img src="image.png" className="plate" onClick={(e)=> movToMenu(e)} />
          <p className="image-text2" onClick={(e)=> movToMenu(e)}>Customer</p>
          <p className="image-text2-1" onClick={(e)=> movToMenu(e)}>Login</p>
        </div>
      </div>
      {/* <button className='sitebutton' onClick={(e)=> movToLogin()}>Staff Login</button>
        <button className='sitebutton' onClick={(e)=> movToMenu(e)}>Customer</button> */}
      {/* </div> */}
    </div>
  )
}

export default StartWebSite