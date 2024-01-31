import React from 'react'

const Section = () => {
  return (
    // add background to this section!!
    <div className='sec flex flex-col items-center justify-center p-10'>
      <h1 className='w-[801px] h-[130px] text-white mt-20'>Ready to embark on a journey of discovery and connection?</h1>
      <p className='text-white'>Click your way into the Community Hub and be part of the action.
      </p>
      {/* add link !! */}
      <button className='w-[205px] h-[55px]  rounded-3xl bg-white hover:bg-purple-500 hover:text-white text-purple-500 text-lg'>Try for free</button>
      
    </div>
  )
}

export default Section