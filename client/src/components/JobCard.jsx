import React from "react";

import { format } from "date-fns";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  const { category, min_price, deadline, max_price, description,job_title, _id, bid_count } = job;
  return (
    <div>
      <div
        // to={`/job/1`}
        className="w-full max-w-sm px-4 py-3 bg-white border rounded-md shadow-md hover:scale-[1.05] transition-all"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-light text-gray-800 ">
            Deadline: {format(new Date(deadline), 'PP')}
          </span>
          <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
            {category}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
           {job_title}
          </h1>

          <p className="mt-2 text-sm text-gray-600 ">
            {description}
          </p>
          <p className="mt-2 text-sm font-bold text-gray-600 ">
            Range: ${min_price} - ${max_price}
          </p>
          <p className="mt-2 text-sm font-bold text-gray-600 ">Total Bids:{bid_count} </p>
          <div className="my-4">
          <Link to={`/job/${_id}`} className="px-8 py-2.5 bg-gray-600 text-white rounded ">Job Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
