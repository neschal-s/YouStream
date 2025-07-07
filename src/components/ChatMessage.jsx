import React from 'react'


const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm py-1 px-l-2 rounded-lg'>
            <img className="h-8 rounded-full" src="https://t4.ftcdn.net/jpg/12/49/12/63/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg" alt="profile" />
            <span className='font-semibold px-2'>{name}</span>
            <span className='font-extralight text-sm'>{message}</span>
        </div>
    )
}

export default ChatMessage