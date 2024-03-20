import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-2 mx-10'>
            <div className='flex items-center'>
                <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className='w-[80px] cursor-pointer ' alt="logo" /></Link>
                <Link to="/movies/popular"><span className='mx-5 py-2 text-xl cursor-pointer text-white hover:text-red-500'>Popular</span></Link>
                <Link to="/movies/top_rated"><span className='mx-5 py-2 text-xl cursor-pointer text-white hover:text-red-500'>Top Rated</span></Link>
                <Link to="/movies/upcoming"><span className='mx-5 py-2 text-xl cursor-pointer text-white hover:text-red-500'>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header