import axios from "axios";
import React, { useEffect, useState } from "react";

const AllJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetchJobs()
    },[])

    const fetchJobs = async ()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_api_URL}/all-jobs`)
        console.log(data)
        setJobs(data)
    }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">All Jobs</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-10">
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphics Design">Graphics Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
        </div>

        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Deadline</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <button className="btn">Reset</button>
      </div>
    </div>
  );
};

export default AllJobs;
