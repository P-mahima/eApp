import React from 'react'
import { BrowserRouter,Navigate,Route,Routes,} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/cart/Cart';
import NoPage from './pages/nopage/Nopage'
import MyState from './context/data/MyState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Fashion from './Component/Fashion';
import MobileeCompo from './Option/MobileeCompo';
import LaptopCompo from './Option/LaptopCompo';
import TVCompo from './Option/TVCompo';
import MenCompo from './Option/Men';
import WomenCompo from './Option/Women';
import HomeBed from './Option/HomeBed';
import HomeCurtains from './Option/HomeCurtains';
import HomeDecor from './Option/HomeDecor';
import HomeSofa from './Option/HomeSofa';
import HomeLight from './Option/HomeLight';
// import NextPage from './NextPage.jsx/NextPage';




const App = () => {


  return (
    <div>
      <MyState>
      <BrowserRouter>
      <Routes>
      <Route path='/mobile' element={<MobileeCompo/>} />
      <Route path='/tv' element={<TVCompo/>} />
      <Route path='/laptop' element={<LaptopCompo/>} />
      <Route path='/womenfashion' element={<WomenCompo/>} />
      <Route path='/menfashion' element={<MenCompo/>} />
      <Route path='/homebed' element={<HomeBed/>} />
      <Route path='/homecurtains' element={<HomeCurtains/>} />
      <Route path='/homedecor' element={<HomeDecor/>} />  
      <Route path='/homesofa' element={<HomeSofa/>} />  
      <Route path='/homelight' element={<HomeLight/>} /> 
      

        
        <Route path='/' element={<Home/>} />
        <Route path ='/order' element={<ProtectedUser><Order/></ProtectedUser>}/>  // the user will see only order page
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/productinfo/:id' element={<ProductInfo/>}/>
        <Route path='/*' element={<NoPage/>}/>
        {/* <Route path='/NextPage/:id' element={<NextPage/>}  /> */}

      </Routes>
        <ToastContainer/>
      </BrowserRouter>
      </MyState>
    </div>
  )
}

export default App

//user protected route //if user come  he will see any page means children page else return to  login page

const ProtectedUser = ({children}) =>{
  const user = localStorage.getItem('user')
  if(user){
    return (children)
  }
  else{
    return <Navigate to={'/login'}  />
  }
} 