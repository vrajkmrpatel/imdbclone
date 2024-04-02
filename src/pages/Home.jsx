import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])


    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                                <div className="md:h-[600px]">
                                    <img className='w-full block m-auto' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div
                                    className="absolute p-20 bottom-0 h-[70%] flex flex-col w-full justify-end items-start opacity-100 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]">
                                    <div className=" font-black text-[4rem] mb-[0.4rem] text-left">{movie ? movie.original_title : ""}</div>
                                    <div className=" text-[2rem] mb-4">
                                        {movie ? movie.release_date : ""}
                                        <span className=" ml-12">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star text-yellow-400 ml-2" />{" "}
                                        </span>
                                    </div>
                                    <div className=" italic text-[1rem] flex text-left mb-1 w-1/2">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />

            </div>
        </>
    )
}

export default Home