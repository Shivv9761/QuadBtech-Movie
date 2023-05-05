import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-hot-toast"
import { add, remove } from "../redux/Slices/MovieSlice"
import { useState } from 'react';
import {Link} from "react-router-dom"
const Movies = ({ post }) => {

  let { name, image, premiered, type } = post.show;
  // console.log(image?.original);
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("See Full Info")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("remove from cart")
  }
  return (

    <div className='group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl'>
      <div className='truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left'>
        <p>{name}</p>
      </div>
      <div className=' w-40 text-gray-400 font-normal text-[10px] text-left'>
        <p>{ }</p>
      </div>
      <div className='h-[180px]'>
        <img className='h-full w-full object-contain' src={image?.original} />
      </div>
      <div className='flex items-center justify-between w-full mt-5'>
        <p className='text-green-600 font-semibold'>{"Best " + type +" movie"}</p>
        <div className="cursor-pointer group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide" onClick={addToCart} >
        <Link
            to="/movie"
             >
            Preview{" "}
          </Link>
        </div>
   
      </div>
    </div>
  )
};

export default Movies;
