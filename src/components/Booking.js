import React, { useState } from "react";
import { Link } from "react-router-dom";

function Booking() {

  const [user, setUser] = useState({
    userName: "",
    phoneNumber: "",
    age: "",
    movie: "",
  });

  const handleFormChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-10">
      <form action="" onSubmit={handleFormSubmit}>
        <div className="mt-10 flex flex-col items-center justify-center gap-8 rounded-3xl border-2 p-7" style={{ width: "24rem" }}>
          <div className="">
            <div className="text-center ">
              <h3 className='text-green-600 font-semibold text-5xl'>Booking</h3>
            </div>
            <div className="col my-2 ">
              <input
                type="text"
                className="border-4 p-1 rounded-2xl mt-3 mb-3"
                placeholder="Enter Your Name"
                name="userName"
                value={user.userName}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="col my-2">
              <input
                type="text"
                className="border-4 p-1 rounded-2xl mt-3 mb-3"
                placeholder="Enter Your Phone Number"
                name="phoneNumber"
                required
                value={user.phoneNumber}
                onChange={handleFormChange}
              />
            </div>
            <div className="col my-2">
              <input
                type="text"
                className="border-4 p-1 rounded-2xl mt-3 -mb-3"
                placeholder="Enter Your Age"
                name="age"
                required
                value={user.age}
                onChange={handleFormChange}
              />
            </div>
            <div className="col my-2 ">
              <input
                type="text"
                className="form-control"
                name="movie"
                value={user.name}
                readOnly
              />
            </div>
            <div onClick={()=>{alert("Booking Succesful")}} className="cursor-pointer hover:bg-gray-700 flex items-center justify-center mt-5 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">
         
              <Link
                to="/"
                className="btn btn-primary my-3"
                type="submit"
              >
                Confirm Booking
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Booking;
