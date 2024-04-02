import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaSearch } from "react-icons/fa";

const Header = () => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((res) => res.json())
          .then((json) => {
            const results = json.filter((user) => {
              return user && user.name && user.name.toLowerCase(value);
            });
            console.log(results);
          });
      };
    
      const handleChange = (value) => {
        setInput(value);
        fetchData(value);
      
      };

  return (
    <div className="flex items-center justify-between py-2 mx-10 sticky">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            className="w-[80px] cursor-pointer "
            alt="logo"
          />
        </Link>
        <Link to="/movies/popular">
          <span className="mx-5 py-2 text-xl cursor-pointer text-white hover:text-red-500">
            Popular
          </span>
        </Link>
        <Link to="/movies/top_rated">
          <span className="mx-5 py-2 text-xl cursor-pointer text-white hover:text-red-500">
            Top Rated
          </span>
        </Link>
        <Link to="/movies/upcoming">
          <span className="mx-5 py-2 text-xl cursor-pointer text-white hover:text-red-500">
            Upcoming
          </span>
        </Link>
      </div>
      <div className="bg-white min-w-[600px] rounded-[10px] h-10 px-4 flex items-center">
        <FaSearch id="search-icon" className=" text-black" />
        <input
          type="text"
          className=" bg-transparent text-black border-none h-full text-[1.25rem] w-full ml-[5px]  focus:outline-none"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <Link
        to="https://github.com/vrajkmrpatel/imdbclone"
        target="_blank"
        className="p-3"
      >
        <FaGithub className="text-2xl cursor-pointer" />
      </Link>
    </div>
  );
};

export default Header;
