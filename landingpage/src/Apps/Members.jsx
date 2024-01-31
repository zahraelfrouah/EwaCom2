import React from 'react'

const Members = () => {
  return (
    <div className=' flex flex-col items-center justify-center mb-32'>
        <h1>Meet the Powerhouse Behind the Pixels! <span>Our Team</span></h1>
        <p className='mb-[37px]'>Say hello to the awesome crew behind this site!  We're the folks turning ideas into pixels, and we can't wait for you to explore what we've made of it for our Community Hub"
        </p>
        <div className='cards w-[1456px] h-[600px]  rounded-lg p-16 flex items-center justify-between'>
          <div className="card w-[305px] h-[500px] bg-white rounded-lg flex flex-col items-center justify-center">
              <img src="./mehdi.png" alt="" className='rounded-full mb-5' />
              <h3>@RidmaniElMahedi</h3>
              <h4 className='mb-10'>Web Developer</h4>
              <p className=' w-[236px] mb-20'>Hello, I'm El Mahedi Ridmani, a 22-year-old a Web Developer from Taroudant, Morocco. With an ambitious and cheerful personality.</p>
              <button className='w-[165px] h-[45px] rounded-3xl  bg-purple-500 text-white rou'>Let’s talk</button>
          </div>
          <div className="card w-[305px] h-[500px] bg-white rounded-lg flex flex-col items-center justify-center">
              <img src="./tarik.png" alt="" className='rounded-full mb-5' />
              <h3>@KhalfiTarik</h3>
              <h4 className='mb-10'>Web Developer</h4>
              <p className=' w-[236px] mb-20'>Hello, I'm Tarik Khalfi, a 29-year-old a Web Developer from Agadir, Morocco. With an ambitious and cheerful personality.</p>
              <button className='w-[165px] h-[45px] rounded-3xl  bg-purple-500 text-white rou'>Let’s talk</button>
          </div>
          <div className="card w-[305px] h-[500px] bg-white rounded-lg flex flex-col items-center justify-center">
              <img src="./sara.png" alt="" className='rounded-full mb-5' />
              <h3>@EssahliSara</h3>
              <h4 className='mb-10'>Web Developer</h4>
              <p className=' w-[236px] mb-20'>Hello, I'm Sara Essaheli, a 21-year-old a Web Developer from Agadir, Morocco. With an ambitious and cheerful personality.</p>
              <button className='w-[165px] h-[45px] rounded-3xl  bg-purple-500 text-white 50%'>Let’s talk</button>
          </div>
          <div className="card w-[305px] h-[500px] bg-white rounded-lg flex flex-col items-center justify-center">
              <img src="./zahra.png" alt="" className='rounded-full mb-5' />
              <h3>@ElfrouahZahra</h3>
              <h4 className='mb-10'>Web Developer</h4>
              <p className=' w-[236px] mb-20'>Hello, I'm Zahra Elfrouah, a 22-year-old a Web Developer from Essaouira, Morocco. With an ambitious and cheerful personality.</p>
              <button className='w-[165px] h-[45px] rounded-3xl  bg-purple-500 text-white rou'>Let’s talk</button>
          </div>
  
        </div>
    </div>
  )
}

export default Members