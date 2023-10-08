import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = () => {
  return (
    <div>
        <NavLink to= '/mobile'>Mobile</NavLink>
        <NavLink to= '/tv'>TV</NavLink>
        <NavLink to= '/laptop'>Laptop</NavLink>
        <NavLink to= '/fashion'>Fashion</NavLink>
        <NavLink to= '/home'>Home</NavLink>
        {/* <NavLink>Mobile</NavLink> */}
    </div>
  )
}

export default Link