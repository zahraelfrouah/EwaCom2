import React from 'react'
import NavBare from '../Components/NavBare'

const Header = () => {
  return (
  <div>
    <div className="container w-full">
        <section className="background-radial-gradient  text-center lg:text-left">
         <div class="relative bg-cover bg-center bg-no-repeat  h-full"
      style={{ backgroundImage: `url('/Mask group.png')` }} >
         <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full   bg-fixed">
          <NavBare/>
          <div className="flex flex-col h-full items-center justify-center pb-24">
          <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12 mb-11 ">
            <h5>Your Students Hub Community</h5>
            <h2>Where Minds Connect and 
                  Ideas Flourish!</h2>
            <h5>Unleash the Power of Collaborative Learning and Spark Innovation.</h5>                 
          </div>
          <div>
            {/* add link to buttons!!! */}
            <button className='w-[205px] h-[55px] rounded-3xl bg-transparent border-white border-solid border-2 hover:bg-white hover:text-purple-500 text-white mr-9 text-lg'>Discover</button>
            <button className='w-[205px] h-[55px] rounded-3xl bg-transparent border-white border-solid border-2 hover:bg-white hover:text-purple-500 text-white text-lg'>Contact us</button>
           </div>
          </div>
        </div>
      </div>
    </section>

    </div>

  </div>
  )
}

export default Header