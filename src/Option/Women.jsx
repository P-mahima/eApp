import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Combine.css'
import Layout from '../components/layout/Layout'
import { addToCart } from '../redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Store } from '../context/data/MyContext'

const WomenCompo = () => {
    const[women, setWomen] = useState('')

    
    const context = useContext(Store)
    const {mode, product} = context
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    useEffect(() => {
        axios('http://localhost:3004/route/data')
        .then((res) =>setWomen(res.data))
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
                <h1 className='heading'>Women's Cart</h1>
          <div className='cartBox'>
                {women && women.filter((item) => item.category === 'WomenFashion').map((cat) => {
                    return (
                        <div className='cartItem'>
                            <img className='cartImageItem' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwo'>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>{cat.price}</h3>
                            </div>
                                <button onClick={() => addCart(cat)} className='addtocartitem'>Add to Cart</button>
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

export default WomenCompo