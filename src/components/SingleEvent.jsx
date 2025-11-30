import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

const SingleEvent = () => {
  const events = useLoaderData();
  const { id } = useParams();

  const singleEvent = events.find((e) => e.id === id);

  if (!singleEvent) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Event not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-4 md:p-10">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Thumbnail */}
        <img
          src={singleEvent.thumbnail}
          alt={singleEvent.name}
          className="w-full h-64 md:h-80 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {singleEvent.name}
          </h1>

          <p className="text-gray-600">{singleEvent.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Category</h3>
              <p className="text-gray-800">{singleEvent.category}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Date</h3>
              <p className="text-gray-800">{singleEvent.date}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Location</h3>
              <p className="text-gray-800">{singleEvent.location}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Entry Fee</h3>
              <p className="text-gray-800 font-bold">
                {singleEvent.entry_fee === 0
                  ? "Free"
                  : `${singleEvent.entry_fee} BDT`}
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-end">
            <Link
              to="/home"
              className="bg-orange-500 text-white px-6 py-2 rounded-md shadow hover:bg-orange-600 duration-300"
            >
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
