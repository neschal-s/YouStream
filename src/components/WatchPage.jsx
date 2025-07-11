import React, { use, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './commentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    })

    return (
        <div className='flex flex-col w-full'>
            <div className='px-5 flex '>
                <div>
                    <iframe className=" rounded-lg" width="1100" height="550" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />


        </div>

    )
}

export default WatchPage