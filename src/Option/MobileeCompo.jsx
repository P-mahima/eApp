import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Online.css'
import Layout from '../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '../context/data/MyContext'
import { addToCart } from '../redux/CartSlice'
import { toast } from 'react-toastify'


const MobileeCompo = () => {
    const[mobile, setMobile] = useState('')

    const context = useContext(Store)
    const {mode, product} = context
    
    useEffect(() => {
        axios('http://localhost:3004/route/data')
        .then((res) =>setMobile(res.data))
        .catch((err) => console.log(err))
    })


    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('Product added successfully')
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])











    // console.log(mobile)
  return (
    <Layout>
                <h1 className='heading'>Mobiles</h1>
          <div className='cartBox'>
                {mobile && mobile.filter((item) => item.category === 'Mobile').map((cat, index) => {
                    return (
                        <div className='cartItem' key={index}>
                            <img className='cartImage' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwo'    style={{ color: mode === 'dark' ? 'white' : '', }}>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>{cat.price}</h3>
                            </div>
                                <button onClick={() => addCart(cat)} className='addtocart'>Add to Cart</button>
                        </div>
                    )
                })}
            </div>



            <div className="flex flex-wrap -m-4">
                    { product && product.map((item) => {
                        // const { title, price, description, imageUrl } = item;
                        return (
                            <button onClick={() => addCart(item)} type='button' className='addtocart'>Add to Cart</button>
                        )
                    })}
                </div>
                <br></br>
                <br></br>

    </Layout>
  )
}

export default MobileeCompo