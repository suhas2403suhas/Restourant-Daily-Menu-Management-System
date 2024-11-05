
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StartWebSite from './Components/StartWebSite'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import StaffLogin from './Components/StaffLogin'
import MenuComponent from './Components/MenuComponent'
import AddCat from './Components/AddCat'
import AllFoodItems from './Components/AllFoodItems'
import AddFoodItem from './Components/AddFoodItem'
import GenerateBill from './Components/GenerateBill'
import CustomerInfo from './Components/CustomerInfo'
import DisplayBill from './Components/DisplayBill'
import Staff from './Components/Staff'
import Aboutus from './Components/Aboutus'
import ConatctUs from './Components/ConatctUs'
import FeedBack from './Components/FeedBack'
import SuccessfulOrder from './Components/SuccessfulOrder'

function App() {

  return (
    <div className='bg'>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<StartWebSite/>}></Route>
      <Route path='/staff-login' element={<StaffLogin/>}></Route>

      <Route path='/Menu' element={<MenuComponent/>}></Route>
      <Route path='/CMenu' element={<MenuComponent/>}></Route>

      <Route path='/add-Cat' element={<AddCat/>}></Route>

      <Route path='/all-food-items'     element={<AllFoodItems/>}></Route>
      <Route path='/cat-food-items/:id' element={<AllFoodItems/>}></Route>
      <Route path='/all-food-items/C' element={<AllFoodItems/>}></Route>
      <Route path='/cat-food-items/:id/C' element={<AllFoodItems/>}></Route>

      <Route path='/AddFoodItem'        element={<AddFoodItem/>}></Route>
      <Route path='/AddFoodItem/:id'    element={<AddFoodItem/>}></Route>
      <Route path='/AddFoodItemss/:id'  element={<AddFoodItem/>}></Route>

       <Route path='/gen-bill' element={<GenerateBill/>}></Route>
      <Route path='/Cust-Info' element={<CustomerInfo/>}></Route>

      <Route path='/view-bill' element={<DisplayBill/>}></Route>
      <Route path='/Staff' element={<Staff/>}></Route>

      <Route path='/About-us' element={<Aboutus/>}></Route>
      <Route path='/Contact-us' element={<ConatctUs/>}></Route>
      <Route path='/FeedBack' element={<FeedBack/>}></Route>
      <Route path='/Success' element={<SuccessfulOrder/>}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </div>
  )
}

export default App
