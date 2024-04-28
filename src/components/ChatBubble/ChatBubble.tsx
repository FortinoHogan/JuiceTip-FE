import React from 'react'
import { IChatBubble } from './ChatBubble.interfaces'

const ChatBubble = (props: IChatBubble) => {
  const { message, time } = props;
  const formatTime = () => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  return (
    <div className='px-5 mb-5 flex justify-end'>
      <span className='px-5 py-2 text-[#5D5D5D] bg-[#D9FDD3] rounded-md'>
        <div className='text-lg pr-14'>{message}</div>
        <div className='text-xs flex justify-end opacity-60'>{formatTime()}</div>
      </span>
    </div>
  )
}

export default ChatBubble