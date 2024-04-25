import React, {useState} from 'react'
import hamburger from '../assets/hamburger.png'
import close from '../assets/Frame.png'

const Header = () => {
  
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 3,
      link: "capsules",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <header className='flex flex-col justify-center items-center text-center'>

        <section className='navbar flex justify-between items-center'>

            <h1 className='font-bold'>CapsuleX</h1>

            <nav className='desktop-nav flex justify-between items-center w-2/5'>
                <a href='http' className='capitalize'>about</a>
                <a href='http' className='capitalize'>capsules</a>
                <a href='http' className='capitalize'>contact</a>
            </nav>
        
            <button className='btn1 border-none outline-none rounded-2xl flex justify-center py-1 px-6'>View all</button>
            
            <div onClick={() => setNav(!nav)} className="toggler md:hidden cursor-pointer">

                {nav ? <img src={close} alt='logo' width='50' height='50'/> : 
                  <img src={hamburger} alt='logo' width='30' height='30'/>
                }

            </div>

            {nav && (
            
              <div className="mobilenav pt-4 flex flex-col items-center">
              
                {links.map(({ id, link }) => (
                  <div
                    key={id} className='mt-4'
                  >
                    <a className='capitalize font-semibold' onClick={() => setNav(!nav)} href={link}>
                      {link}
                    </a>
                  </div>
                ))}
        
                <button className='border-none outline-none rounded-2xl flex justify-center py-1 px-6 mt-8'>View all</button>
              
              </div>

            )}

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