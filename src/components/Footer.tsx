import React from 'react'

const Footer = () => {

  const footlinks = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "capsules",
    },
    {
      id: 3,
      link: "contact",
    },
  ];

  return (
    <footer className='footer flex flex-col justify-center items-center text-center py-4 px-8'>

      <div className='foottop md:flex md:justify-between items-center w-full pt-2'>

        <h1 className='text-left font-bold'>CapsuleX</h1>

        <div className="navitems flex justify-between items-center md:w-2/5">

          {footlinks.map(({ id, link }) => (
            <div
              key={id}
            >
              <a className='capitalize font-base text-white' href={link}>{link}</a>
            </div>
          ))}

        </div>

      </div>

      <hr className='bg-white rule' />

      <div className='footbottom justify-center md:flex md:justify-between items-center mt-4'>

          <p className='text-sm text-white'>© 2024 CapsuleX. All rights reserved.</p>

      </div>

    </footer>
  )
}

export {Footer}