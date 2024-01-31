import React from 'react'
import NavBare from '../Components/NavBare'

const Header = () => {
  return (
  <div>
    <div className="container w-full">
        <section className="background-radial-gradient  text-center lg:text-left">
         <div class="relative  bg-cover bg-no-repeat bg-[50%] bg-[url('https://s3-alpha-sig.figma.com/img/3bd3/18ee/83156dbfa0f4ce2941888737f1071664?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4qj~jBfNxOvDgLvdGqBy5BPfStQ3sB4TRtTI97n16dQyvklLFqN60SrFm466BcMv0nSdT~Q~PeOTNK6Mt4TedU72VoKYO23O49o5RTq92vkJzw6WTMbmTi0u6bT5tzrWDukUOv4goMnlgc9pU3qn7ls8oQuXy2VzG437uyG8g-ebTkaAUNwTNfGWvIeizvFH4oqabVNWm2ALO~sIJlrS10M7xEBpIuEKIaNPSCjZPf8CP-4JbDLHD0c0l5YwOb589ROUXeH5TLVMlrGmDf-VdgsVCXI676TWEOe7tV-5uznfMbmM29IAezFewEsNWgRn2lTZR4Cqnh3kb6EPn9Ejw__')] h-[774px] w-[1580px]">
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