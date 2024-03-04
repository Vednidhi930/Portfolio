import React from 'react'

const AboutMe = () => {
  return (
    <>
           <section
        style={{backgroundImage: "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)"}}
        className="sm:h-screen flex items-center w-full lg:flex-nowrap sm:flex-wrap"
      >
        <div className="Left-part flex flex-col lg:w-2/4  items-center">
          <div className="My-detail w-4/4  p-2 my-2">
            <h1 className="text-white text-6xl ms-24 font-bold text-nowrap my-3">
              About Me
            </h1>
            <h3 className="text-white text-2xl font-serif ms-24 my-3">Freelance UI/UX & Website Designer</h3>
            <p className="text-white ms-24 my-2 text-2xl">
              I'M vednidhi,a passionate web developer with a knack for turning
              ideas into captivating online experiences.
            </p>
            <div className='border-2 border-white w-96 flex justify-between ms-24 my-4 p-2'>
                 <p className='text-white text-xl'>Name</p><p className='text-white text-xl'>:</p><p className='text-white text-xl'> Vednidhi</p>
            </div>

            <div className='border-2 border-white w-96 flex justify-between ms-24 my-4 p-2'>
                 <p className='text-white text-xl'>Email</p><p className='text-white text-xl'>:</p><p className='text-white text-xl'>Shanukumar7988@gmail.com</p>
            </div>

            <div className='border-2 border-white w-96 flex justify-between ms-24 my-4 p-2'>
                 <p className='text-white text-xl'>Phone no.</p><p className='text-white text-xl'>:</p><p className='text-white text-xl'>9306515029</p>
            </div>
          </div>
        </div>

        <div className="Right-part flex lg:w-2/4 me-7">
          <img src="https://www.dharmishi.com/img/vectors/developer.png" />
        </div>
      </section>
    </>
  )
}

export default AboutMe
