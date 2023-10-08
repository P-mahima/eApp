import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './TV.css'
import Layout from '../components/layout/Layout'

const TVCompo = () => {
    const[tv, setTV] = useState('')

    useEffect(() => {
        axios('http://localhost:3004/route/data')
        .then((res) =>setTV(res.data))
        .catch((err) => console.log(err))
    })
    // console.log(mobile)
  return (
    <Layout>
                <h1 className='heading'>TV</h1>
          <div className='cartBox'>
                {tv && tv.filter((item) => item.category === 'TV').map((cat) => {
                    return (
                        <div className='cartItem'>
                            <img className='TVImage' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwo'>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>{cat.price}</h3>
                                <button className='addtocart'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <br></br>
            <br></br>
            
            
            </Layout>
  )
}

export default TVCompo