import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-col justify-center items-center text-center'>

        <section className='navbar flex justify-between items-center'>

            <h1>CapsuleX</h1>

            <nav className='flex justify-between items-center w-2/5'>
                <a href='http' className='capitalize'>about</a>
                <a href='http' className='capitalize'>capsules</a>
                <a href='http' className='capitalize'>contact</a>
            </nav>
        
            <button className='border-none outline-none rounded-2xl flex justify-center py-1 px-6'>View all</button>

        </section>
        
        <section className='hero flex flex-col justify-center items-center mt-32 mb-32'>

            <h1 className='font-bold text-4xl'>CapsuleX</h1>
            <p className='tx font-medium mt-8 text-lg'>Best place to view all capsule from Spacex</p>
            <p className='tx font-light mt-4'>Quis ipsum pellentesque nulla nulla elementum sagittis dictum</p>
            <button className='border-none outline-none rounded-2xl flex justify-center py-1 px-6 mt-8'>View all</button>

        </section>

    </header>
  )
}

export {Header}