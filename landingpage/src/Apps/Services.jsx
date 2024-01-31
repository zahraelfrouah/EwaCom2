import React from 'react'

const Services = () => {
  return (
    <div className='p-16'>
      <div className='container1 flex flex-col items-center justify-center mb-20'>
          <h1>Dive into our <span>Community Hub</span>,
          Your New Favorite Campus <br /><span> Command Center!</span></h1>
          <p className='mb-[37px]'>Share, Post, and Discover News that Matters. Whether it's breaking stories, exciting projects, or cool links, this is your space to shine. Engage, collaborate, and let the ideas flow.
          </p>
          {/* add background images to this section!!! */}
        <div className='bg-black w-[1456px] h-[494px] rounded-lg mb-20'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-white w-[678px] h-[245px] text-center p-10'>Trending Now:<br />
                Unwrap the Latest and Campus Chronicles </h1>
            </div>
            <div>
              <img src="./Vector.png" alt="" className='mr-40' />
            </div>      
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className=' w-[780px] h-[500px] card1 text-center  p-4 rounded-lg shadow-md mr-10'>
            <h1 className='text-white w-[482px] h-[ 180px] text-center p-10 mt-36'>
            Spark Innovation: <br/>
            Pitch and Share Your  Project Ideas</h1>
          </div>
         
          <div className='card2 w-[640px] h-[500px]  rounded-lg shadow-md text-center  p-4 '>         
          <h1 className='text-white w-[626px] h-[143px] text-center p-20 mt-36'>Link Up: Share the Web's Best</h1> 
           </div>

        </div>
      </div>
    </div>
  )
}

export default Services