import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import { Store } from '../../context/data/MyContext'

const Order = () => {
  const context = useContext(Store)
  const {name, rollNo} = context
  return (
    <Layout>Order
      <h1>Name:{name}</h1>
      <h2>RollNo:{rollNo}</h2>
    </Layout>
  )
}

export default Order