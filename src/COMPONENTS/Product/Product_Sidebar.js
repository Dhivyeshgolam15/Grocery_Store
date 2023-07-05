import React from 'react'
import AllProduct from './AllProduct'
import CategorySidebar from './Category'
import './Product_Sidebar.css'
const Product_Sidebar = () => {
  return (
    <div className='Product_Sidebar'>
        <CategorySidebar/>
        <AllProduct/>
    </div>
  )
}

export default Product_Sidebar












