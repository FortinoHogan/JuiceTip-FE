import React, { useEffect, useRef } from 'react'
import { IChatBubble } from './ChatBubble.interfaces'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ChatBubble = (props: IChatBubble) => {
  const { message, date, id, senderId } = props;
  const { user } = useSelector((state: RootState) => state.auth);

  const isSender = user.userId === senderId;

  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message, date])

  const formatTime = () => {
    const milliseconds = date.seconds * 1000 + date.nanoseconds / 1000000;
    const currDate = new Date(milliseconds);

    const hours = currDate.getHours().toString().padStart(2, '0');
    const minutes = currDate.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  return (
    <div ref={ref} className={`flex ${isSender ? 'justify-end' : 'justify-start'} px-5 mb-5`}>
      <span className={`rounded-md px-5 py-2 text-[#5D5D5D] ${isSender ? 'bg-[#D9FDD3]' : 'bg-[#fafafa]'}`}>
        <div className='text-lg pr-14'>{message}</div>
        <div className='text-xs flex justify-end opacity-60'>{formatTime()}</div>
      </span>
    </div>
  )
}

export default ChatBubble