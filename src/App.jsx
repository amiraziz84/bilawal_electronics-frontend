import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Categories from './pages/CategoriesPage'




const App = () => {
  return (
    <>
   <Navbar/>
   <Home/>
   <Categories/>
   <Footer/>
   
    </>
  )
}

export default App