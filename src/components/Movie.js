import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {toast} from "react-hot-toast"
import {add,remove} from "../redux/Slices/MovieSlice"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
function Movie() {

    const {movie}=useSelector((state)=>state);
    // console.log(movie)
  return (
    <div className='h-full w-full flex justify-center items-center'>

        {/* <Navbar/> */}

         <div className="flex flex-col gap-7  relative my-4">
      <div style={{ width: "18rem" }}>
        <span
         className='bg-green-400 rounded-3xl top-2 absolute left-1 p-1 text-xs'
          

        >
          premiered on {movie?.show?.premiered}
        </span>
        <img className="card-img-top" src={movie?.show?.image?.original} alt="Card image cap" />
        <div className="mb-5">
          <h5 className='text-green-600 font-semibold text-4xl mt-4 mb-4'>{movie?.show?.name}</h5>
          <p dangerouslySetInnerHTML={{__html: movie?.show?.summary.split(" ").slice(0,16).join(" ")+"..."}}>
            </p>
        </div>
       
          <div className="list-group-item text-center border-t-2 border-b-2">
            Rating: {movie?.show?.rating?.average}
          </div>
       
        <div className="cursor-pointer hover:bg-gray-700 flex items-center justify-center mt-5 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">
        <Link to="/booking">
          Book Now
        </Link>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Movie