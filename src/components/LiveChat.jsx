import React, { useEffect,useState}  from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';


const LiveChat = () => {

    const dispatch = useDispatch();
    const ChatMessages = useSelector(store => store.Chat.messages);
    const [liveMessage,setLiveMessage]=useState("");

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage()
            }));
        }, 200);

        return () => clearInterval(i);
    }, []);

    return (
        <>
        <div className='ml-2 p-4 border border-gray-950 w-full h-[550px] bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse'>
            <div>
                {[...ChatMessages].slice().reverse().map((c, i) => (
                    <ChatMessage key={i} name={c.name} message={c.message} />
                ))}
            </div>
        </div>
        <form className="flex items-center mt-2 ml-2 space-x-2">
            <input
                className="p-2 border border-gray-600 rounded-lg hover:bg-slate-100 flex-grow"
                type="text" value={liveMessage} 
                onChange={(e)=>{
                    seLiveMessage(e.target.value)
                }}
                placeholder="Type a message..."
            />
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send
            </button>
        </form>


        </>
    );
};

export default LiveChat;
