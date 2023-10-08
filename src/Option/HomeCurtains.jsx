import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeBed.css'
import Layout from '../components/layout/Layout'
import { Store } from '../context/data/MyContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { toast } from 'react-toastify'

const HomeCurtains = () => {
    const[curtains, setCurtains] = useState('')

    const context = useContext(Store)
    const {mode, product} = context
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    useEffect(() => {
        axios('http://localhost:3004/route/data')
        .then((res) =>setCurtains(res.data))
        .catch((err) => console.log(err))
    })


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
                <h1 className='heading'>Curtain's</h1>
          <div className='cartBox'>
                {curtains && curtains.filter((item) => item.category === 'HomeCurtains').map((cat) => {
                    return (
                        <div className='cartItem'>
                            <img className='cartImageBed' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwo'>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>{cat.price}</h3>
                            </div>
                                <button  onClick={() => addCart(cat)} className='addtocartBed'>Add to Cart</button>
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

export default HomeCurtains