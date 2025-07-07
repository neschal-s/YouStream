import React from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/contants';

const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-1 m-2 w-72 justify-center items-center'>
            <img src={thumbnails.medium.url} alt='video-thumbnail' className='w-full rounded-lg ' />
            <ul>
                <li className='font-semibold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard