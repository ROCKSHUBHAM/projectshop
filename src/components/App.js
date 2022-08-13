import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Category from './Category'
import Footer from './Footer'
import Gallery from './Gallery'
import Home from './Home'
import Navbar from './Navbar'
import Products from './Products'
import ProductView from './ProductView'
import Videos from './Videos'

const App = () => {
  return (
    <div className='bg-slate-50 w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Category' element={<Category />} />
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productView' element={<ProductView/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App