import React, { useState } from 'react'
import { Store } from './MyContext'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { fireDB } from '../../firebase/FirebaseConfig'



function MyState(props) {
  const [mode, setMode] = useState('light')
  const [loading, setLoading] = useState(false)
  // title: null,
  // price: null,
  // imageUrl: null,
  // category: null,
  // description: null,
  


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }


  // products, setProducts, addProduct,product 

  return (
    <Store.Provider value={{ mode, toggleMode, loading, setLoading}}>
      {props.children}
    </Store.Provider>
  )
}

export default MyState