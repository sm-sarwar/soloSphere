import React from "react";

const JobCard = () => {
    const date = new Date().toISOString().split('T')[0];
  return (
    <div>
      <div className="card w-96 bg-base-100 card-md shadow-sm border">
        <div className="card-body">
          <div>
            <p>Deadline: {date}</p>
            <div className="badge badge-soft badge-neutral">Neutral</div>
          </div>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
