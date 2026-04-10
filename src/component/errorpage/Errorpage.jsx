import React from "react";
import { Link } from "react-router";
import Navbar from "../shared/navbar/Navbar";

const ErrorPage = () => {
  return (
    <div>
    <Navbar />

    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="text-center max-w-lg">
        
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-red-500 mb-4 animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full text-lg font-medium transition duration-300 shadow-lg"
        >
          Go Back Home
        </Link>

        {/* Optional Illustration */}
        <div className="mt-10 opacity-70">
          <span className="text-6xl">🚧</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;