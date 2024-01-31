import React from 'react'

const NavBare = () => {
  return (
    <div className='navbare flex flex-wrap items-center w-full text-black justify-between  h-[115px] p-16'>
      <div className='logo'>
        <img src="./Logopartner.png" alt="logo" />
      </div>
      {/* add links to menu !!! */}
      <div className='liste '>
        <ul className="flex list-none">
        <li className="mr-4 hover:bg-white  w-[120px] h-[45px] rounded-3xl text-center p-2">
        <a href="#" className="text-white hover:text-black">
          Home
        </a>
      </li>
      <li className="mr-4 hover:bg-white  w-[120px] h-[45px] rounded-3xl text-center p-2">
        <a href="" className="text-white  hover:text-black">
          About us
        </a>
      </li>
      <li className="mr-4 hover:bg-white  w-[120px] h-[45px] rounded-3xl text-center p-2">
        <a href="#" className="text-white  hover:text-black">
          Services
        </a>
      </li>
      <li className="mr-4 hover:bg-white  w-[120px] h-[45px] rounded-3xl text-center p-2">
        <a href="#" className="text-white  hover:text-black">
          Members
        </a>
      </li>
        </ul>
      </div>
      {/* add link to button !! */}
      <div className='btn'>
        <button className='w-[165px] h-[45px] rounded-3xl bg-white hover:bg-purple-500 hover:text-white text-purple-500'>Let’s start</button>

      </div>
      
    </div>
  )
}

export default NavBare