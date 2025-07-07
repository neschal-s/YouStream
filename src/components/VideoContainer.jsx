import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import VideoCard from './videoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null); // new

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();

            if (json.error) {
                console.error("API Error:", json.error);
                setError(json.error.message);
                return;
            }

            console.log("Fetched Videos: ", json.items);
            setVideos(json.items || []);
        } catch (err) {
            console.error("Fetch failed:", err);
            setError("Failed to fetch videos.");
        }
    };

    if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

    return (
        <div className="flex flex-wrap p-2 justify-center ">
            {videos.length === 0 ? (
                <p>Loading or no videos available.</p>
            ) : (
                videos.map((video) => (
                    <Link to={"/watch?v=" + video.id}>
                        < VideoCard key={video.id} info={video} />
                    </Link>))
            )}
        </div>
    );
};

export default VideoContainer;
