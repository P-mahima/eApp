import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Link from './Link/Link'
import Mobile from '../Component/Mobile'
import TV from '../Component/TV'
import Laptop from '../Component/Laptop'
// import Fashion from '../Component/Fashion'
import Home from '../pages/home/Home'
import Order from '../pages/Order/Order'
import Cart from '../pages/cart/Cart'
import Login from '../pages/registration/Login'
import Signup from '../pages/registration/Signup'
import ProductInfo from '../pages/productInfo/ProductInfo'
import Nopage from '../pages/nopage/Nopage'
import { ToastContainer } from 'react-toastify'
import MyState from '../context/data/MyState'



const RouteCompo = () => {
    return (
        <div>
            <BrowserRouter>
                <Link />
                <Routes>
                    <Route path='/mobile' element={<Mobile />} />
                    <Route path='/tv' element={<TV />} />
                    <Route path='/laptop' element={<Laptop />} />
                    {/* <Route path='/fashion' element={<Fashion />} /> */}
                    {/* <Route path='/home' element={<Home />} /> */}


                    <Route path='/' element={<Home />} />
                    <Route path='/order' element={<ProtectedUser><Order /></ProtectedUser>} />  // the user will see only order page
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/productinfo/:id' element={<ProductInfo />} />
                    <Route path='/*' element={<Nopage />} />


                </Routes>
                <ToastContainer />
            </BrowserRouter>
            <MyState />
        </div>
    )
}

export default RouteCompo



//user protected route //if user come  he will see any page means children page else return to  login page

const ProtectedUser = ({ children }) => {
    const user = localStorage.getItem('user')
    if (user) {
        return (children)
    }
    else {
        return <Navigate to={'/login'} />
    }
} 