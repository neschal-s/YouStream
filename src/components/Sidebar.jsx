import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className='p-5 shadow-lg w-48'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>News</li>
            </ul>

            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>News</li>
            </ul>

        </div>
    )
}

export default Sidebar