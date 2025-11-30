import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-5">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold mt-3">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mt-2">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
