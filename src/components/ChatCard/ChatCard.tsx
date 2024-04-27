import React from 'react'

const ChatCard = () => {
  return (
    <div className='cursor-pointer h-32 w-full border-b-4 border-b-[#e5e5e5 flex justify-between px-8'>
      <div className='flex items-center gap-3'>
        <div className='w-24 h-24 rounded-full'>
          <img src={require("../../assets/images/facebook.png")} alt="logo" className='object-cover w-full h-full' />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-5d5d5d font-bold text-xl'>Mr. Steve Unsworth</p>
          <p className='text-5d5d5d text-lg font-semibold'>mang eakkkkkkkkkkkkk?</p>
        </div>
      </div>
      <p className='mt-5 text-lg text-10b981 font-semibold'>15:00</p>
    </div>
  )
}

export default ChatCard