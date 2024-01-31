import React from 'react'

import Header from '../Apps/Header'
import AboutUs from '../Apps/AboutUs'
import Services from '../Apps/Services'
import Members from '../Apps/Members'
import Section from '../Apps/Section'
import Footer from './Footer'
import Slider from '../Apps/Slider'

const LandingPage = () => {
  return (
    <div className=''>
      <Header/>
      <Slider/>
      <AboutUs/>
      <Services/>
      <Members/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default LandingPage