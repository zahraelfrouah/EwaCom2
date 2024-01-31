import React from 'react'




const Footer = () => {
  return (
    <div className='ftr'>
    <div className=' flex items-center justify-between p-16'>
      <div className="logo mt-20">
        <img src="./logo.png" alt="LOGO" />
      </div>
      <div className="Navigation ">
        <h3 className='text-white mb-28'>Navigation</h3>
        <ul className=' '>
          <li className='mb-4'><a href="" className='text-white text-lg'>Home</a></li>
          <li className='mb-4'><a href="" className='text-white text-lg'>About us</a></li>
          <li className='mb-4'><a href="" className='text-white text-lg'>Services</a></li>
          <li className=''><a href="" className='text-white text-lg'>Members</a></li>
        </ul>
      </div>
      <div className="Contact">
      <h3 className='text-white mb-40'>Contact</h3>
        <ul className=' '>
          <li className='mb-4'><a href="" className='text-white text-lg'>Contact@ewa.com</a></li>
          <li className='mb-10'><a href="" className='text-white text-lg'>Support@ewacom2.com</a></li>
        
        </ul>
      </div>
      <div className="Follow us ">
        <h3 className='text-white mb-40'>follow Us</h3>
        <div className='flex items-center justify-between mb-20'>

        <a href="https://www.facebook.com/ewa.digital/"><img src="./facebook.svg" alt=""  className='mr-10'/></a>
        <a href="https://www.instagram.com/ewa.digital/"><img src="./instagram.svg" alt="" className='mr-10'/></a>
        <a href="https://ma.linkedin.com/company/ewadigital"><img src="./linkedin.svg" alt="" className='mr-10'/></a>
        </div>
      
      </div>
    </div>
      <div>        
          <p className='text-white text-center mt-10 ml-80'>Copyright © 2024 Ewa Community, All rights reserved</p>
      </div>
 </div>
  )
}

export default Footer