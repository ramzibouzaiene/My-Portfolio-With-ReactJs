import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#102b53]
    flex justify-center items-center p-4'
    >
        <form action="" className='flex flex-col max-w-[600px] w-full h-full'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-3'> Shoot me an email - ramzibouzaiene00@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="name"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email"/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact