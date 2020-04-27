import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar =()=>(
    <div>
<NavLink to ="/" activeClassName ="is-active" exact ={true}>Home</NavLink>
<NavLink to ="/Blog/blog" activeClassName ="is-active">Blog</NavLink>
</div>)

export default Navbar
