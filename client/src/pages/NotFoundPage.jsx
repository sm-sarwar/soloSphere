import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <h1 className="text-5xl mt-52 font-bold text-center">ERROR 404</h1>
      <div className="text-center my-10">
      
        <Link to={'/'} className="btn"> <FaArrowLeft />Go Back Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
