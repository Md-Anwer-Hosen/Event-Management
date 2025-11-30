import React from "react";
import { Link } from "react-router-dom";

const Event = ({ data }) => {
  return (
    <div className="card card-side bg-base-100 shadow-md flex  sm:flex-none flex-col sm:flex-row ">
      <figure className="  w-full h-full  sm:w-2/3">
        <img
          className=" w-full  object-fill  rounded-sm"
          src={data.thumbnail}
          alt={data.name}
        />
      </figure>

      <div className="card-body w-full  sm:w-1/3 ">
        <h2 className="card-title text-lg font-semibold">{data.name}</h2>
        <p className="text-gray-600">{data.description}</p>

        <div className="card-actions sm:justify-end">
          <Link
            className="btn bg-[#F9A51A] text-white"
            to={`/event/${data.id}`}
          >
            {" "}
            See in Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
