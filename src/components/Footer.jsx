import React from 'react'

export default function Footer() {
  return (

    <>
    <div className="bg-gray-900  text-white ">
      <div className=" p-10 gap-10 text-[1rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="logo mr-20 font-medium text-[1rem]">Rate My Professor</div>
        <div className="navlinks font-medium">
          <ul>
          <li className="cursor-pointer pb-4">Home</li>
            <li className="cursor-pointer pb-4">Find a Professor</li>
            <li className="cursor-pointer pb-4">Find a school</li>
          </ul>
        </div>
        <div className="contacts">
            <div className='text-gray-500'>Social</div>
            <div className='text-gray-500'>Get in touch</div>
            <ul>
                    <li>1800 183 424</li>
                    <li>find@gmail.com</li>
                </ul>
        </div>
      </div>
      <div className="flex p-6 md:justify-center items-center gap-16">
        <div>Cookies Policy</div>
        <div>Privacy Policy</div>
      </div>
    </div>

    
                </>
  )
}
