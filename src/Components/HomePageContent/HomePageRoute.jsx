import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePageContent from './HomePageContent'
import HomePageSectionContent from './HomePageRoutePage/HomePageSectionContent'
import InstagramPage from './HomePageRoutePage/InstagramPage';
import Cart from '../../cartpage_karthik/cart'


const HomePageRoute = () => {
   
    
  return (
    <>
        <Routes>

            <Route  path="/" element={<HomePageContent />} />
            <Route exact path="/:title/:id" element={<HomePageSectionContent />} /> 
            <Route exact path="/INSTAGRAM" element={<InstagramPage />} /> 
            <Route  path="/cart" element={<Cart />} />
            {/*  */}
        </Routes>

    </>
  )
}

export default HomePageRoute